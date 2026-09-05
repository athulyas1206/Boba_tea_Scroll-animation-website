"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface LoadingScreenProps {
  progress: number;
  isLoaded: boolean;
  flavorTitle?: string;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  progress,
  isLoaded,
  flavorTitle = "Chocolate Boba Tea",
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#0d0604] via-[#140a05] to-[#080302] transition-opacity duration-1000 ease-in-out ${
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-900/15 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        <div className="flex items-center gap-2 mb-3 text-amber-400/80">
          <Sparkles size={18} className="animate-spin" style={{ animationDuration: '8s' }} />
          <span className="text-xs uppercase tracking-[0.4em] font-sans font-medium text-amber-300/80">
            Artisanal Reserve
          </span>
          <Sparkles size={18} className="animate-spin" style={{ animationDuration: '8s' }} />
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-extralight text-amber-50 tracking-wider mb-2 drop-shadow-md">
          {flavorTitle}
        </h1>

        <p className="text-xs text-amber-200/50 font-sans tracking-widest uppercase mb-10">
          Preparing 72 High-Resolution Frames
        </p>

        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-amber-950/60 rounded-full overflow-hidden mb-4 border border-amber-800/20 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-amber-700 via-amber-500 to-amber-300 transition-all duration-300 ease-out shadow-[0_0_12px_rgba(245,158,11,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="flex items-baseline gap-1 font-mono text-xs text-amber-400/90 font-medium">
          <span className="text-lg">{progress}</span>
          <span>%</span>
        </div>
      </div>
    </div>
  );
};
