"use client";

import { motion } from "framer-motion";

const manufacturers = [
  "TOTO",
  "LIXIL",
  "Panasonic",
  "Takara standard",
  "Rinnai",
  "NORITZ",
  "トクラス",
  "クリナップ",
];

export default function Manufacturers() {
  // Duplicate for seamless scroll
  const items = [...manufacturers, ...manufacturers, ...manufacturers, ...manufacturers];

  return (
    <section className="w-full py-24 overflow-hidden border-t border-b border-[#1D1D1F] bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-[0.65rem] tracking-[0.3em] uppercase border-b border-[#1D1D1F] pb-4 inline-block">
          Partners & Brands
        </h2>
        <p className="font-serif-ja text-sm mt-8 text-gray-400 tracking-widest">
          主要メーカー協賛・施工対応
        </p>
      </motion.div>

      <div className="relative flex overflow-hidden whitespace-nowrap w-full group">
        {/* Gradients for smooth fade out at edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee group-hover:[animation-play-state:paused] w-max">
          {items.map((brand, index) => (
            <div
              key={index}
              className="px-12 flex items-center justify-center font-sans tracking-widest font-light text-2xl md:text-4xl text-[#1D1D1F] opacity-30 hover:opacity-100 transition-opacity duration-300"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
