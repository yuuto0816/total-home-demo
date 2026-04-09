"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Sample4() {
  return (
    <main className="w-full min-h-screen bg-[#EFECE6] text-[#111111] overflow-hidden">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-center mix-blend-difference text-white">
        <Link href="/" className="font-serif italic text-2xl tracking-wide">
          Aqua Boost.
        </Link>
        <span className="text-xs tracking-[0.3em] uppercase">Magazine / Vol.01</span>
      </header>

      {/* Editorial Hero */}
      <section className="relative w-full h-screen p-4 md:p-8 flex flex-col justify-end">
        <motion.div 
          initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" }}
          animate={{ clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
          className="absolute inset-4 md:inset-8 z-0 overflow-hidden"
        >
          <Image 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop" 
            alt="Interior" 
            fill 
            className="object-cover filter grayscale"
            priority
          />
        </motion.div>

        <div className="relative z-10 w-full flex flex-col md:flex-row items-end justify-between text-white mix-blend-difference pb-8 md:pb-12 px-4 md:px-12">
          <motion.h1 
             initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1 }}
             className="font-serif italic text-[15vw] md:text-[10vw] leading-[0.8] mb-8 md:mb-0"
          >
            Purity.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
            className="max-w-xs text-sm md:text-base tracking-widest leading-loose font-serif-ja text-right"
          >
            究極の透明度がもたらす、<br />
            かつてない肌触りと安らぎ。
          </motion.p>
        </div>
      </section>

      {/* Masonry / Asymmetric Layout */}
      <section className="py-32 px-4 md:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
          
          <div className="md:col-span-5 pt-0 md:pt-32">
             <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }}>
                <h2 className="font-serif italic text-4xl md:text-6xl mb-12">The Art of Filtration</h2>
                <div className="font-serif-ja text-lg leading-loose space-y-8 text-gray-800">
                  <p>美しいデザインと、妥協のない技術の融合。私たちの浄水システムは、家という空間にノイズを与えることなく、静かに最高品質の水を生み出し続けます。</p>
                  <p>蛇口をひねるたびに溢れるのは、不純物を極限まで削ぎ落とした、自然本来の「水」の形です。</p>
                </div>
             </motion.div>
          </div>

          <div className="md:col-span-7 flex flex-col gap-24">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}
               className="relative w-full aspect-[3/4] md:aspect-[4/5]"
            >
               <Image src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1500&auto=format&fit=crop" fill alt="Water detail" className="object-cover" />
               <p className="absolute -bottom-8 right-0 font-sans text-xs tracking-widest uppercase">Fig 1. Center Unit</p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Full width quote */}
      <section className="py-32 bg-[#111111] text-[#EFECE6] px-4 text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
          className="font-serif italic text-3xl md:text-5xl leading-tight max-w-4xl mx-auto"
        >
          "It's not just about drinking water. It's about how water touches every part of your life."
        </motion.h3>
        <p className="font-serif-ja mt-12 tracking-[0.5em] text-sm text-gray-500">水を変えることは、人生を変えること。</p>
      </section>

    </main>
  );
}