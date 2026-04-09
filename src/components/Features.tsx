"use client";

import { Droplets, Shield, Activity, RefreshCw } from "lucide-react";

const features = [
  {
    title: "セントラル浄水方式",
    enTitle: "CENTRAL PURIFICATION",
    description: "家庭内のすべての水栓から、ミネラルウォーターレベルの安全な水を提供します。飲料水や料理に使うだけでなく、お風呂や洗面所の水まで完全に浄化。",
    icon: Droplets,
  },
  {
    title: "次世代フィルター",
    enTitle: "NEXT-GEN FILTRATION",
    description: "不純物を極限まで取り除く特殊フィルターと、医療業界でも使われる特殊素材のハイブリッド。塩素、バクテリア、サビなどを確実にブロックします。",
    icon: Shield,
  },
  {
    title: "美容と健康の追求",
    enTitle: "BEAUTY & HEALTH",
    description: "肌や髪へのダメージをやさしく防ぎます。まるでリゾートスパのような体感に変わり、日々のシャワーが極上のスキンケアへと進化します。",
    icon: Activity,
  },
  {
    title: "メンテナンスフリー",
    enTitle: "MAINTENANCE FREE",
    description: "高次元の設計で長期間、安定した性能を維持します。定期的なカートリッジ交換以外の時間はかからず、ランニングコストも最小限に抑えます。",
    icon: RefreshCw,
  },
];

export default function Features() {
  return (
    <section className="w-full py-48 px-8 border-t border-[#1D1D1F]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[0.65rem] tracking-[0.3em] uppercase mb-32 border-b border-[#1D1D1F] pb-4 inline-block">
          Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-32">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col">
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
          ))}
        </div>
      </div>
    </section>
  );
}
