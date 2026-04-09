"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Concept() {
  return (
    <section className="w-full py-32 bg-white relative">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 text-center text-[#5C4D4D]">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-xl md:text-2xl font-serif-ja text-[#D98A6C] tracking-widest mb-4">
            CONCEPT
          </h2>
          <p className="text-2xl md:text-4xl font-serif-ja leading-relaxed mt-8">
            まるで、森のなかの<br className="md:hidden" />湧き水ような毎日。
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-3xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl mb-16"
        >
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop"
            alt="Relaxing water"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#8C7A7A] leading-loose tracking-wide md:text-lg space-y-6 max-w-2xl mx-auto"
        >
          <p>
            朝起きて飲む、一杯の白湯。帰宅してホッと一息つくお風呂の時間。
            日々の暮らしのなかに、水はいつも寄り添っています。
          </p>
          <p>
            「AQUA BOOST」が目指したのは、水本来のやさしさを取り戻すこと。
            赤ちゃんの肌にも優しく、素材の味を引き立てる浄水システムで、
            何気ない日常を、ちょっとだけ特別なものに変えていきます。
          </p>
        </motion.div>

      </div>
    </section>
  );
}