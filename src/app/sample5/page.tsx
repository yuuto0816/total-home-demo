"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Sample5() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background opacity fades as you scroll deeper
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.1, 0.3]);
  const textY1 = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const textO1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [0, 1, 1, 0]);

  const textY2 = useTransform(scrollYProgress, [0.3, 0.5], [100, 0]);
  const textO2 = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0]);

  const textY3 = useTransform(scrollYProgress, [0.6, 0.8], [100, 0]);
  const textO3 = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.9], [0, 1, 1, 0]);

  return (
    <main ref={containerRef} className="relative w-full h-[400vh] bg-black text-white">
      
      {/* Fixed Background Image */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden z-0">
        <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 w-full h-full">
          <Image 
            src="https://images.unsplash.com/photo-1436891620584-47fd0e565afb?q=80&w=2000&auto=format&fit=crop" 
            alt="Deep water" 
            fill 
            className="object-cover"
          />
        </motion.div>
        {/* Navigation */}
        <header className="absolute top-0 w-full p-8 z-50 flex justify-between items-center text-white/50">
          <Link href="/" className="font-sans text-sm tracking-[0.3em] uppercase hover:text-white transition">AQUA BOOST</Link>
          <span className="font-sans text-xs tracking-widest">STORY</span>
        </header>
      </div>

      {/* Scrollable Story Layers */}
      <div className="absolute top-0 left-0 w-full h-[400vh] z-10 pointer-events-none">
        
        {/* Scene 1 */}
        <div className="h-screen w-full flex items-center justify-center">
           <motion.div style={{ y: textY1, opacity: textO1 }} className="text-center px-4 max-w-3xl">
              <h2 className="font-serif-ja text-3xl md:text-5xl leading-loose tracking-[0.2em] mb-8">
                透明という<br/>新しい価値観。
              </h2>
              <p className="font-serif-ja text-lg md:text-xl text-white/60 leading-loose tracking-widest">
                私たちは毎日、どれほどの水に触れているでしょうか。水分補給、毎日の料理、疲れた体を癒やすお風呂。
              </p>
           </motion.div>
        </div>

        {/* Scene 2 */}
        <div className="h-screen w-full flex items-center justify-center">
           <motion.div style={{ y: textY2, opacity: textO2 }} className="text-center px-4 max-w-3xl">
              <h2 className="font-serif-ja text-3xl md:text-5xl leading-loose tracking-[0.2em] mb-8">
                見えない不純物を、<br/>一切残さない。
              </h2>
              <p className="font-serif-ja text-lg md:text-xl text-white/60 leading-loose tracking-widest">
                AQUA BOOSTは、水道管の根元から水をろ過。微細なフィルターが、水本来の純粋な姿を取り戻します。
              </p>
           </motion.div>
        </div>

        {/* Scene 3 */}
        <div className="h-screen w-full flex items-center justify-center">
           <motion.div style={{ y: textY3, opacity: textO3 }} className="text-center px-4 max-w-3xl">
              <h2 className="font-serif-ja text-3xl md:text-5xl leading-loose tracking-[0.2em] mb-8">
                肌で感じる、<br/>確かな違い。
              </h2>
              <p className="font-serif-ja text-lg md:text-xl text-white/60 leading-loose tracking-widest mb-12">
                塩素の刺激から解放された、究極のシャワー体験。髪も肌も、水が変わるだけで驚くほど変わります。
              </p>
              <div className="pointer-events-auto">
                 <button className="bg-white text-black font-bold tracking-widest px-10 py-4 text-sm hover:bg-white/80 transition">
                   詳細を知る
                 </button>
              </div>
           </motion.div>
        </div>

      </div>
    </main>
  );
}