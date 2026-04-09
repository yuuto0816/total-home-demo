"use client";

import { Droplets, ShieldCheck, HeartPulse, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    id: "01",
    title: "家中すべてが名水級",
    description: "キッチンからお風呂、トイレの手洗いまで。すべての蛇口からミネラルウォーターと同レベルのきれいなお水が出ます。毎日のうがいも安心です。",
    icon: Droplets,
    color: "bg-[#E3E8E1]", 
    iconColor: "text-[#5C7A5C]"
  },
  {
    id: "02",
    title: "医療レベルのフィルター",
    description: "不純物を徹底的にクリア。微小なサビやバクテリアはもちろん、独特のカルキ臭もしっかりと取り除きます。お年寄りや小さなお子様にも最適です。",
    icon: ShieldCheck,
    color: "bg-[#F3EBE6]",
    iconColor: "text-[#8C7565]"
  },
  {
    id: "03",
    title: "髪と肌がよろこぶ",
    description: "塩素を含む水道水特有のダメージがないため、お風呂あがりのお肌はしっとり。シャワー後の髪も、サラサラ・ツヤツヤに生まれ変わります。",
    icon: HeartPulse,
    color: "bg-[#F2E8DF]",
    iconColor: "text-[#D98A6C]"
  },
  {
    id: "04",
    title: "手軽で安心。ランニングコストも",
    description: "大がかりなメンテナンスは不要。年に一度のカートリッジ交換だけで、買ったばかりの性能をずっと維持します。毎月のお水代も節約。",
    icon: Wrench,
    color: "bg-[#EAEAF2]",
    iconColor: "text-[#6C7A8C]"
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 text-[#5C4D4D]"
        >
          <h2 className="text-xl md:text-2xl font-serif-ja text-[#D98A6C] tracking-widest mb-4">
            REASONS
          </h2>
          <p className="text-2xl md:text-4xl font-serif-ja mt-8">
            選ばれる4つの理由
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-[#EAEAF2] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0 mr-6 md:mr-8 text-center pt-2">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${feature.color} mb-4`}>
                    <feature.icon size={28} className={feature.iconColor} strokeWidth={2} />
                </div>
                <span className={`font-serif-ja text-xl font-bold ${feature.iconColor}`}>
                    {feature.id}
                </span>
              </div>
              
              <div>
                <h3 className="font-serif-ja text-xl md:text-2xl font-bold text-[#5C4D4D] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#8C7A7A] leading-loose tracking-wide md:text-[15px]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}