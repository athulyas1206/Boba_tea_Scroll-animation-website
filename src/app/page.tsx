"use client";

import React, { useState } from "react";
import { BobaSequenceCanvas } from "@/components/BobaSequenceCanvas";
import { Navbar } from "@/components/Navbar";
import { FlavorSelector, FlavorKey } from "@/components/FlavorSelector";
import { RecipeSection } from "@/components/RecipeSection";

export default function Home() {
  const [activeFlavor, setActiveFlavor] = useState<FlavorKey>("chocolate");

  const flavorConfigs: Record<
    FlavorKey,
    {
      name: string;
      tagline: string;
      notes: string;
      bgGradient: string;
      mainBg: string;
      sectionBg: string;
      accentText: string;
      badgeStyle: string;
      cardBg: string;
      cardIcon: string;
      folder: string;
    }
  > = {
    chocolate: {
      name: "Belgian Chocolate Boba",
      tagline: "ARTISANAL MIXOLOGY & SECRET RECIPES",
      notes:
        "Master the secrets of 70% dark Belgian cacao fused with slow-cooked brown sugar tapioca pearls.",
      bgGradient: "from-[#1c0d06] via-[#140804] to-[#0b0402]",
      mainBg: "bg-[#140804]",
      sectionBg: "bg-gradient-to-b from-[#0b0402] via-[#140804] to-[#1c0d06]",
      accentText: "text-amber-400",
      badgeStyle: "bg-amber-950/50 border-amber-500/30 text-amber-300",
      cardBg: "bg-amber-950/20 border-amber-900/30 hover:border-amber-500/50",
      cardIcon: "bg-amber-500/15 border-amber-500/30 text-amber-400",
      folder: "chocolate",
    },
    strawberry: {
      name: "Wild Alpine Strawberry Boba",
      tagline: "ARTISANAL MIXOLOGY & SECRET RECIPES",
      notes:
        "Learn how to cook fresh strawberry compote and layer sweet cream ombre boba tea from scratch.",
      bgGradient: "from-[#240810] via-[#18050a] to-[#0d0205]",
      mainBg: "bg-[#18050a]",
      sectionBg: "bg-gradient-to-b from-[#0d0205] via-[#18050a] to-[#240810]",
      accentText: "text-rose-400",
      badgeStyle: "bg-rose-950/50 border-rose-500/30 text-rose-300",
      cardBg: "bg-rose-950/20 border-rose-900/30 hover:border-rose-500/50",
      cardIcon: "bg-rose-500/15 border-rose-500/30 text-rose-400",
      folder: "strawberry",
    },
    blueberry: {
      name: "Nordic Wild Blueberry Boba",
      tagline: "ARTISANAL MIXOLOGY & SECRET RECIPES",
      notes:
        "Discover the step-by-step technique to craft violet blueberry reduction and indigo galaxy boba layers.",
      bgGradient: "from-[#0b0e24] via-[#060818] to-[#03040d]",
      mainBg: "bg-[#060818]",
      sectionBg: "bg-gradient-to-b from-[#03040d] via-[#060818] to-[#0b0e24]",
      accentText: "text-indigo-400",
      badgeStyle: "bg-indigo-950/50 border-indigo-500/30 text-indigo-300",
      cardBg: "bg-indigo-950/20 border-indigo-900/30 hover:border-indigo-500/50",
      cardIcon: "bg-indigo-500/15 border-indigo-500/30 text-indigo-400",
      folder: "blueberry",
    },
  };

  const currentConfig = flavorConfigs[activeFlavor];

  // Robust handler to select flavor and smoothly navigate Lenis/window to the top
  const handleSelectFlavor = (flavor: FlavorKey) => {
    setActiveFlavor(flavor);
    if (typeof window !== "undefined") {
      const lenisInstance = (window as unknown as { __lenis?: { scrollTo: (target: number, opts?: { duration?: number }) => void } }).__lenis;

      if (lenisInstance) {
        lenisInstance.scrollTo(0, { duration: 1.2 });
      } else {
        const homeElem = document.getElementById("home");
        if (homeElem) {
          homeElem.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    }
  };

  return (
    <main
      className={`relative min-h-screen ${currentConfig.mainBg} text-amber-50 transition-colors duration-700 ease-in-out`}
      id="home"
    >
      {/* Navbar with active flavor callback */}
      <Navbar
        currentFlavor={activeFlavor}
        onFlavorSelect={(flavor) => handleSelectFlavor(flavor as FlavorKey)}
      />

      {/* Scroll-Driven Boba Tea Animation Sequence Header */}
      <BobaSequenceCanvas
        key={activeFlavor}
        frameCount={72}
        framePathBuilder={(index) =>
          `/frames/${currentConfig.folder}/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`
        }
        flavorName={currentConfig.name}
        flavorTagline={currentConfig.tagline}
        flavorNotes={currentConfig.notes}
        bgGradient={currentConfig.bgGradient}
      />

      {/* Post-Scroll Interactive Recipe Section */}
      <section
        id="recipes"
        className={`relative z-30 pt-6 pb-24 px-6 sm:px-12 max-w-6xl mx-auto ${currentConfig.sectionBg} transition-colors duration-700 ease-in-out`}
      >
        {/* 3 Horizontal Rounded Rectangle Flavor Selector Buttons */}
        <FlavorSelector
          activeFlavor={activeFlavor}
          onSelectFlavor={(flavor) => handleSelectFlavor(flavor)}
        />

        {/* Interactive Recipe Masterclass Component */}
        <RecipeSection
          activeFlavor={activeFlavor}
          accentText={currentConfig.accentText}
          badgeStyle={currentConfig.badgeStyle}
          cardBg={currentConfig.cardBg}
          cardIcon={currentConfig.cardIcon}
        />

        {/* Footer / Contact Accent */}
        <div
          id="contact"
          className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-amber-400/40 gap-4"
        >
          <div>© 2026 HAUT BOBA MIXOLOGY. ALL RIGHTS RESERVED.</div>
          <div className={`tracking-widest uppercase ${currentConfig.accentText} transition-colors duration-700`}>
            {activeFlavor.toUpperCase()} BOBA TEA — RECIPE & MIXOLOGY SYSTEM
          </div>
        </div>
      </section>
    </main>
  );
}
