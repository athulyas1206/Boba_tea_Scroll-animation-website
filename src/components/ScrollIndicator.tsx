"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

interface ScrollIndicatorProps {
  visible: boolean;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ visible }) => {
  return (
    <div
      className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none transition-all duration-700 ease-out ${
        visible ? "opacity-90 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <span className="text-xs uppercase tracking-[0.3em] font-sans font-light text-amber-100/70 drop-shadow">
        Scroll to explore
      </span>
      <div className="w-8 h-8 rounded-full border border-amber-500/20 bg-amber-950/40 backdrop-blur-md flex items-center justify-center text-amber-400 animate-bounce-slow shadow-lg shadow-amber-950/50">
        <ChevronDown size={16} className="text-amber-400" />
      </div>
    </div>
  );
};
