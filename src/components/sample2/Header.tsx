"use client";

import Link from "next/link";
import { Trees } from "lucide-react";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full p-6 text-[#5C4D4D] z-50 mix-blend-normal">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center bg-[#FAF8F5]/80 backdrop-blur-md rounded-full px-8 py-4 shadow-sm border border-white">
        <Link href="/" className="font-serif-ja font-bold tracking-widest text-lg flex items-center gap-2">
            <Trees size={20} className="text-[#D98A6C]" />
            <span>AQUA BOOST</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-sans font-medium tracking-widest text-sm">
          <button className="hover:text-[#D98A6C] transition-colors">Concept</button>
          <button className="hover:text-[#D98A6C] transition-colors">Features</button>
          <button className="hover:text-[#D98A6C] transition-colors">Contact</button>
        </nav>

        {/* Mobile Menu Icon */}
        <button className="md:hidden flex flex-col gap-1.5 focus:outline-none">
          <span className="w-6 h-0.5 bg-[#5C4D4D] rounded-full"></span>
          <span className="w-4 h-0.5 bg-[#5C4D4D] rounded-full ml-auto"></span>
        </button>
      </div>
    </header>
  );
}