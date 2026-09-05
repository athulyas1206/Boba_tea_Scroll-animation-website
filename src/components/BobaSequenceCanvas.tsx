"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ScrollIndicator } from "@/components/ScrollIndicator";

interface BobaSequenceCanvasProps {
  frameCount?: number;
  framePathBuilder?: (index: number) => string;
  flavorName?: string;
  flavorTagline?: string;
  flavorNotes?: string;
  bgGradient?: string;
}

export const BobaSequenceCanvas: React.FC<BobaSequenceCanvasProps> = ({
  frameCount = 72,
  framePathBuilder = (index: number) =>
    `/frames/chocolate/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`,
  flavorName = "Chocolate Boba Tea",
  flavorTagline = "DECANDENT BELGIAN CACAO & VELVET PEARLS",
  flavorNotes = "Handcrafted with rich 70% dark cacao, fresh organic milk, and slow-chewed tapioca pearls.",
  bgGradient = "from-[#1c0d06] via-[#140804] to-[#0b0402]",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [, setCurrentFrameNumber] = useState(1);

  // Preload sequence images
  const { images, isLoaded, progress } = useImagePreloader(
    frameCount,
    framePathBuilder
  );

  // Render frame on canvas with seamless edge-blending & aspect ratio preservation
  const drawFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      if (!canvas || !images || images.length === 0) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const safeIndex = Math.max(0, Math.min(frameCount - 1, index));
      const img = images[safeIndex];

      if (!img || !img.complete || img.naturalWidth === 0) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const width = rect.width || (typeof window !== "undefined" ? window.innerWidth : 800);
      const height = rect.height || (typeof window !== "undefined" ? window.innerHeight : 600);

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // Object-fit contain math preserving original aspect ratio
      const scale = Math.min(width / img.width, height / img.height);
      const drawWidth = img.width * scale;
      const drawHeight = img.height * scale;
      const dx = (width - drawWidth) / 2;
      const dy = (height - drawHeight) / 2;

      // Fill underlying canvas rectangle with matching chocolate warm tone to eliminate hard seams
      ctx.fillStyle = "#160a05";
      ctx.fillRect(0, 0, width, height);

      // Draw original sequence frame image
      ctx.drawImage(img, dx, dy, drawWidth, drawHeight);

      // Apply soft radial vignette mask around frame edges to melt frame seamlessly into page background
      const centerX = dx + drawWidth / 2;
      const centerY = dy + drawHeight / 2;
      const outerRadius = Math.max(drawWidth, drawHeight) * 0.55;
      const innerRadius = Math.min(drawWidth, drawHeight) * 0.32;

      const vignetteGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        innerRadius,
        centerX,
        centerY,
        outerRadius
      );

      vignetteGrad.addColorStop(0, "rgba(20, 8, 4, 0)");
      vignetteGrad.addColorStop(0.65, "rgba(20, 8, 4, 0.35)");
      vignetteGrad.addColorStop(0.92, "rgba(20, 8, 4, 0.85)");
      vignetteGrad.addColorStop(1, "rgba(20, 8, 4, 1)");

      ctx.fillStyle = vignetteGrad;
      ctx.fillRect(dx - 10, dy - 10, drawWidth + 20, drawHeight + 20);

      ctx.restore();
    },
    [images, frameCount]
  );

  // Initial render when images finish loading
  useEffect(() => {
    if (isLoaded) {
      drawFrame(0);
      const t1 = setTimeout(() => drawFrame(0), 50);
      const t2 = setTimeout(() => drawFrame(0), 200);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [isLoaded, drawFrame]);

  // Window resize listener
  useEffect(() => {
    const handleResize = () => {
      if (isLoaded) {
        drawFrame(0);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, drawFrame]);

  // Setup GSAP ScrollTrigger
  useEffect(() => {
    if (!isLoaded || !containerRef.current || !pinRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      pin: pinRef.current,
      start: "top top",
      end: "+=150vh",
      scrub: 0.5,
      onUpdate: (self) => {
        const frameIndex = Math.min(
          frameCount - 1,
          Math.floor(self.progress * frameCount)
        );
        setCurrentFrameNumber(frameIndex + 1);
        drawFrame(frameIndex);

        if (self.progress > 0.01) {
          setShowScrollIndicator(false);
        } else {
          setShowScrollIndicator(true);
        }
      },
    });

    return () => {
      clearTimeout(refreshTimer);
      st.kill();
    };
  }, [isLoaded, frameCount, drawFrame]);

  return (
    <>
      <LoadingScreen
        progress={progress}
        isLoaded={isLoaded}
        flavorTitle={flavorName}
      />

      <div
        ref={containerRef}
        className={`relative w-full bg-gradient-to-b ${bgGradient}`}
      >
        {/* Sticky Pinned Viewport Container */}
        <div
          ref={pinRef}
          className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#140804]"
        >
          {/* Subtle Ambient Radial Glow matching frame tones */}
          <div className="absolute w-[700px] h-[700px] bg-amber-700/15 rounded-full blur-[140px] pointer-events-none" />

          {/* Canvas Element with Soft Masking */}
          <canvas
            ref={canvasRef}
            className="w-full h-full object-contain relative z-10"
          />

          {/* Luxury Floating Title & Subtitle */}
          <div className="absolute bottom-20 left-8 sm:left-16 right-8 sm:right-16 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 pointer-events-none">
            <div className="max-w-xl">
              <span className="text-[11px] uppercase tracking-[0.4em] font-sans font-semibold text-amber-400/90 mb-1 block">
                {flavorTagline}
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light text-amber-50 tracking-wide drop-shadow-lg leading-tight">
                {flavorName}
              </h2>
            </div>

            <div className="max-w-xs text-xs font-sans font-light text-amber-200/70 leading-relaxed border-l border-amber-500/30 pl-4 py-1 backdrop-blur-xs">
              {flavorNotes}
            </div>
          </div>

          {/* Scroll Indicator Component */}
          <ScrollIndicator visible={showScrollIndicator} />
        </div>
      </div>
    </>
  );
};
