"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

interface NavbarProps {
  currentFlavor?: string;
  onFlavorSelect?: (flavor: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentFlavor = "Chocolate",
  onFlavorSelect,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const flavors = [
    { name: "Chocolate", note: "Belgian Dark Cacao", active: true },
    { name: "Strawberry", note: "Wild Alpine Berry", active: false },
    { name: "Blueberry", note: "Nordic Wild Berry", active: false },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 sm:px-12 py-6 flex items-center justify-between pointer-events-none">
      {/* Brand Logo (Left) */}
      <div className="pointer-events-auto flex items-center gap-3 bg-amber-950/30 border border-amber-500/15 backdrop-blur-md px-4 py-2 rounded-full shadow-lg shadow-black/40">
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.9)] animate-pulse" />
        <span className="text-xs sm:text-sm font-sans tracking-[0.35em] font-semibold text-amber-100 uppercase">
          HAUT BOBA
        </span>
      </div>

      {/* Navigation Tabs (Top Right) */}
      <nav className="pointer-events-auto flex items-center gap-1 sm:gap-2 bg-amber-950/30 border border-amber-500/15 backdrop-blur-md px-3 sm:px-5 py-2 rounded-full shadow-lg shadow-black/40 text-xs tracking-widest font-sans uppercase">
        <a
          href="#home"
          className="px-3 py-1.5 rounded-full text-amber-200/80 hover:text-amber-50 hover:bg-amber-900/30 transition-all duration-300"
        >
          Home
        </a>

        <a
          href="#recipes"
          className="px-3 py-1.5 rounded-full text-amber-200/80 hover:text-amber-50 hover:bg-amber-900/30 transition-all duration-300"
        >
          Recipes
        </a>

        {/* Flavours Dropdown Tab */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            onMouseEnter={() => setDropdownOpen(true)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${
              dropdownOpen
                ? "text-amber-400 bg-amber-900/40 border border-amber-500/30"
                : "text-amber-200/90 hover:text-amber-50 hover:bg-amber-900/30"
            }`}
          >
            <span>Flavours</span>
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${
                dropdownOpen ? "rotate-180 text-amber-400" : "text-amber-400/60"
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div
              onMouseLeave={() => setDropdownOpen(false)}
              className="absolute right-0 mt-3 w-56 py-2 bg-[#120805]/95 border border-amber-500/20 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/80 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
            >
              <div className="px-4 py-2 border-b border-amber-900/30 text-[10px] uppercase tracking-[0.25em] text-amber-400/50 font-mono">
                Select Signature Flavor
              </div>

              {flavors.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    if (onFlavorSelect) onFlavorSelect(item.name.toLowerCase());
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 flex items-center justify-between text-xs transition-colors duration-200 ${
                    item.name.toLowerCase() === currentFlavor.toLowerCase()
                      ? "bg-amber-900/30 text-amber-300 font-medium border-l-2 border-amber-500"
                      : "text-amber-200/70 hover:bg-amber-900/20 hover:text-amber-100"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-serif tracking-wide text-sm">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-amber-400/50 normal-case tracking-normal">
                      {item.note}
                    </span>
                  </div>

                  {item.name.toLowerCase() === currentFlavor.toLowerCase() && (
                    <Sparkles size={12} className="text-amber-400" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <a
          href="#contact"
          className="px-3 py-1.5 rounded-full text-amber-200/80 hover:text-amber-50 hover:bg-amber-900/30 transition-all duration-300"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
};
