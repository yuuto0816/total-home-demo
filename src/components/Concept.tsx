"use client";

import { motion } from "framer-motion";

export default function Concept() {
  const sentences = [
    "水が変われば、暮らしの質が変わる。",
    "私たちは「飲む水」だけでなく、",
    "肌に触れるすべての水に着目しました。",
    "不純物を極限まで取り除き、",
    "大自然の湧き水のような清らかさへ。",
    "それは、目に見えない贅沢。"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="w-full h-screen min-h-[800px] flex flex-col justify-center items-center py-32 px-4 relative max-w-[1200px] mx-auto text-center border-t border-[#1D1D1F]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <h2 className="text-[0.65rem] tracking-[0.3em] uppercase mb-4 border-b border-[#1D1D1F] pb-4 inline-block">
          Concept
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="font-serif-ja text-xl md:text-3xl leading-loose tracking-[0.3em] space-y-12"
      >
        {sentences.map((text, index) => (
          <motion.p key={index} variants={itemVariants}>
            {text}
          </motion.p>
        ))}
      </motion.div>

      <div className="absolute top-1/2 -left-8 md:flex flex-col items-center gap-4 hidden rotate-180">
        <span className="w-[1px] h-32 bg-[#1D1D1F]"></span>
        <span className="font-sans font-thin tracking-[0.4em] text-[10px] uppercase rotate-90 w-max text-gray-400">
          The art of purification
        </span>
      </div>
    </section>
  );
}
