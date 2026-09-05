"use client";

import React from "react";
import "./globals.css";
import { useLenis } from "@/hooks/useLenis";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize Lenis smooth scroll engine
  useLenis(true);

  return (
    <html lang="en" className="dark bg-[#140804]">
      <head>
        <title>HAUT BOBA — Artisanal Scroll Experience</title>
        <meta
          name="description"
          content="Cinematic scroll-driven experience for luxury artisanal boba tea."
        />
      </head>
      <body className="bg-[#140804] text-amber-50 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
