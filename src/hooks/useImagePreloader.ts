import { useState, useEffect, useRef } from "react";

interface PreloaderResult {
  images: HTMLImageElement[];
  isLoaded: boolean;
  progress: number;
}

export function useImagePreloader(
  frameCount: number,
  framePathBuilder: (index: number) => string
): PreloaderResult {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    let mounted = true;
    let loadedCount = 0;
    const images: HTMLImageElement[] = new Array(frameCount);

    if (frameCount === 0) {
      setIsLoaded(true);
      return;
    }

    const onFrameLoad = () => {
      if (!mounted) return;
      loadedCount++;
      const currentProgress = Math.min(
        100,
        Math.round((loadedCount / frameCount) * 100)
      );
      setProgress(currentProgress);

      if (loadedCount >= frameCount) {
        imagesRef.current = images;
        setIsLoaded(true);
      }
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = framePathBuilder(i);
      img.onload = onFrameLoad;
      img.onerror = () => {
        console.warn(`Failed to load image frame at index ${i}: ${img.src}`);
        onFrameLoad(); // Proceed so loading doesn't hang indefinitely
      };
      images[i] = img;
    }

    return () => {
      mounted = false;
    };
  }, [frameCount, framePathBuilder]);

  return {
    images: imagesRef.current,
    isLoaded,
    progress,
  };
}
