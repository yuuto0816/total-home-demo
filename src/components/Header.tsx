"use client";

import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none mix-blend-difference text-white">
      <div className="w-full flex justify-between items-center px-8 py-8 md:px-12 pointer-events-auto">
        <a 
          href="#" 
          className="font-sans font-light text-[10px] tracking-[0.4em] uppercase hover:opacity-50 transition-opacity"
        >
          Aqua Boost
        </a>
        
        <button className="flex items-center gap-4 group hover:opacity-50 transition-opacity p-2">
          <span className="font-sans font-light text-[9px] tracking-[0.3em] uppercase hidden md:block pt-1">
            Menu
          </span>
          <Menu size={24} strokeWidth={1} />
        </button>
      </div>
    </header>
  );
}
