"use client";

import { Droplets, Shield, Activity, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "セントラル浄水方式",
    enTitle: "CENTRAL PURIFICATION",
    description: "家庭内のすべての水栓から、ミネラルウォーターレベルの安全な水を提供します。飲料水や料理に使うだけでなく、お風呂や洗面所の水まで完全に浄化。",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=2000&auto=format&fit=crop", // Elegant faucet/water image
  },
  {
    title: "次世代フィルター",
    enTitle: "NEXT-GEN FILTRATION",
    description: "不純物を極限まで取り除く特殊フィルターと、医療業界でも使われる特殊素材のハイブリッド。塩素、バクテリア、サビなどを確実にブロックします。",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2000&auto=format&fit=crop", // Clean lab/water image
  },
  {
    title: "美容と健康の追求",
    enTitle: "BEAUTY & HEALTH",
    description: "肌や髪へのダメージをやさしく防ぎます。まるでリゾートスパのような体感に変わり、日々のシャワーが極上のスキンケアへと進化します。",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop", // Spa/beauty
  },
  {
    title: "メンテナンスフリー",
    enTitle: "MAINTENANCE FREE",
    description: "高次元の設計で長期間、安定した性能を維持します。定期的なカートリッジ交換以外の時間はかからず、ランニングコストも最小限に抑えます。",
    icon: RefreshCw,
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2000&auto=format&fit=crop", // Modern interior/kitchen
  },
];

export default function Features() {
  return (
    <section className="w-full py-48 px-8 border-t border-[#1D1D1F]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-[0.65rem] tracking-[0.3em] uppercase mb-32 border-b border-[#1D1D1F] pb-4 inline-block">
            Features
          </h2>
        </motion.div>

        <div className="flex flex-col gap-32">
          {features.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 aspect-[4/3] relative overflow-hidden group">
                  <motion.div 
                    className="w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover saturate-50 group-hover:saturate-100 transition duration-500"
                    />
                  </motion.div>
                </div>

                {/* Text section */}
                <div className="w-full md:w-1/2 flex flex-col">
                  <div className="mb-8 flex items-end justify-between border-b border-[#1D1D1F] pb-4">
                    <div>
                      <h3 className="font-serif-ja text-2xl tracking-widest">{item.title}</h3>
                      <p className="font-sans font-thin tracking-widest text-[0.65rem] mt-2 text-gray-400">
                        {item.enTitle}
                      </p>
                    </div>
                    <item.icon size={28} strokeWidth={1} color="#1D1D1F" />
                  </div>
                  <p className="font-serif-ja text-sm leading-8 tracking-wider text-gray-700">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
