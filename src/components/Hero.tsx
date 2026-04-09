"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
          alt="Clean modern bathroom"
          fill
          className="object-cover opacity-30 saturate-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F5F5F7]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-0 left-0 w-full p-8 flex justify-between items-start font-sans font-light tracking-widest text-xs z-10"
      >
        <p>AQUA BOOST PREMIUM</p>
        <p>REDEFINING PURE WATER.</p>
      </motion.div>

      <div className="text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-sans font-thin tracking-tighter leading-none mix-blend-difference text-white"
          style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
        >
          AQUA BOOST
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "1em" }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          className="mt-8 font-serif-ja text-lg md:text-2xl ml-[0.5em] md:ml-[1em] mix-blend-difference text-white"
        >
          家中丸ごとオール浄水
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end border-b border-[#1D1D1F] z-10"
      >
        <div className="w-[1px] h-16 bg-[#1D1D1F] animate-pulse"></div>
        <p className="font-sans font-light text-[0.65rem] tracking-widest uppercase">
          Scroll to explore
        </p>
      </motion.div>
    </section>
  );
}
