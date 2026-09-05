"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export type FlavorKey = "chocolate" | "strawberry" | "blueberry";

interface FlavorSelectorProps {
  activeFlavor: FlavorKey;
  onSelectFlavor: (flavor: FlavorKey) => void;
}

export const FlavorSelector: React.FC<FlavorSelectorProps> = ({
  activeFlavor,
  onSelectFlavor,
}) => {
  const flavorButtons: {
    key: FlavorKey;
    label: string;
    sublabel: string;
    dotClass: string;
    activeClass: string;
    inactiveClass: string;
  }[] = [
    {
      key: "chocolate",
      label: "Chocolate",
      sublabel: "Belgian Cacao",
      dotClass: "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]",
      activeClass:
        "bg-amber-950/80 border-amber-500/60 text-amber-100 shadow-lg shadow-amber-950/80 ring-1 ring-amber-500/30",
      inactiveClass:
        "bg-amber-950/20 border-amber-900/30 text-amber-200/60 hover:bg-amber-900/30 hover:border-amber-500/40 hover:text-amber-100",
    },
    {
      key: "strawberry",
      label: "Strawberry",
      sublabel: "Alpine Berry",
      dotClass: "bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]",
      activeClass:
        "bg-rose-950/80 border-rose-500/60 text-rose-100 shadow-lg shadow-rose-950/80 ring-1 ring-rose-500/30",
      inactiveClass:
        "bg-rose-950/20 border-rose-900/30 text-rose-200/60 hover:bg-rose-900/30 hover:border-rose-500/40 hover:text-rose-100",
    },
    {
      key: "blueberry",
      label: "Blueberry",
      sublabel: "Nordic Wild",
      dotClass: "bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]",
      activeClass:
        "bg-indigo-950/80 border-indigo-500/60 text-indigo-100 shadow-lg shadow-indigo-950/80 ring-1 ring-indigo-500/30",
      inactiveClass:
        "bg-indigo-950/20 border-indigo-900/30 text-indigo-200/60 hover:bg-indigo-900/30 hover:border-indigo-500/40 hover:text-indigo-100",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center my-6">
      <div className="text-[10px] uppercase tracking-[0.35em] font-mono text-amber-400/60 mb-4 flex items-center gap-2">
        <Sparkles size={12} />
        <span>Select Flavor Experience</span>
      </div>

      {/* 3 Horizontal Rounded Rectangle Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
        {flavorButtons.map((btn) => {
          const isActive = activeFlavor === btn.key;
          return (
            <button
              key={btn.key}
              onClick={() => onSelectFlavor(btn.key)}
              className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl border backdrop-blur-md transition-all duration-300 transform active:scale-95 ${
                isActive ? btn.activeClass : btn.inactiveClass
              }`}
            >
              <span className={`w-3 h-3 rounded-full ${btn.dotClass}`} />
              <div className="flex flex-col text-left">
                <span className="text-sm font-serif tracking-wide font-medium">
                  {btn.label}
                </span>
                <span className="text-[10px] font-sans tracking-widest uppercase opacity-70">
                  {btn.sublabel}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
