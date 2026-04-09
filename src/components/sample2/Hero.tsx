"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#FAF8F5] pt-20 px-4 md:px-12">
      
      {/* Soft floating background blob */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#F2E8DF] rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0"
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          rotate: [0, -15, 5, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#E8E1CC] rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0"
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Copy */}
        <div className="w-full md:w-1/2 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white text-[#D98A6C] text-xs font-bold tracking-widest mb-6 shadow-sm">
              NEW LIFESTYLE
            </span>
            <h1 className="font-serif-ja text-4xl md:text-5xl lg:text-6xl leading-[1.4] text-[#5C4D4D]">
              家族の笑顔は、<br />
              <span className="text-[#D98A6C]">きれいな水</span>から。
            </h1>
            <p className="mt-8 text-[#8C7A7A] leading-loose tracking-wide md:text-lg">
              料理、お風呂、そして毎日のうがいや手洗いまで。<br />
              家中のすべての蛇口から、ミネラルウォーター級の<br className="hidden md:block" />
              安心・安全なお水をお届けします。
            </p>
            
            <div className="mt-12">
              <Link href="#" className="inline-flex items-center justify-center bg-[#D98A6C] text-white px-8 py-4 rounded-full font-bold tracking-widest hover:bg-[#C2785D] hover:shadow-lg transition-all hover:-translate-y-1">
                資料請求・お問い合わせ
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Image section with gentle float */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full aspect-[4/5] md:aspect-square overflow-hidden rounded-tl-[100px] rounded-br-[100px] rounded-tr-3xl rounded-bl-3xl shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
              alt="Warm home interior"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8C7A7A] z-10"
      >
        <span className="text-[10px] tracking-[0.2em] font-bold">SCROLL</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-12 bg-[#8C7A7A]"
        />
      </motion.div>
    </section>
  );
}