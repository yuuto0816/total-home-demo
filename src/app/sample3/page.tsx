"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Zap, Droplet, CheckCircle } from "lucide-react";

const logos = ["TOTO", "LIXIL", "Panasonic", "Takara", "Rinnai", "NORITZ"];

export default function Sample3() {
  return (
    <main className="w-full min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-blue-600 selection:text-white">
      {/* SaaS Style Header */}
      <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <Droplet className="text-blue-600" size={24} fill="currentColor" />
            AQUA BOOST <span className="text-blue-600">PRO</span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <Link href="#" className="hover:text-slate-900">Features</Link>
            <Link href="#" className="hover:text-slate-900">Technology</Link>
            <Link href="#" className="hover:text-slate-900">Pricing</Link>
          </nav>
          <button className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide mb-6 border border-blue-100">
            <Zap size={14} /> NEW GENERATION PURIFICATION
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
            次世代のオール浄水システムで、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              住まいの水質を完全にアップデート。
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
            高度なフィルターテクノロジーと独自設計により、キッチン、お風呂、洗面所など、家中のすべての水をミネラルウォーターレベルに引き上げます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition shadow-lg">
              無料シミュレーションを始める
            </button>
            <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition shadow-sm">
              詳しい資料を見る
            </button>
          </div>
        </motion.div>
      </section>

      {/* Infinite Logo Ticker */}
      <div className="w-full bg-white py-10 border-y border-slate-200 overflow-hidden flex flex-col items-center">
        <p className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-6">Trusted by leading brands</p>
        <div className="flex gap-16 whitespace-nowrap animate-marquee w-max opacity-50">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <span key={i} className="text-2xl font-bold tracking-tighter text-slate-400">{logo}</span>
          ))}
        </div>
      </div>

      {/* Bento Grid Features */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">圧倒的なパフォーマンスを、<br />美しいデザインに凝縮。</h2>
          <p className="text-slate-500 max-w-2xl text-lg">必要なすべての機能が、この一つのシステムに統合されています。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Card 1: Large */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="relative z-10 w-1/2">
              <Shield className="text-blue-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-3">医療現場レベルの安全性</h3>
              <p className="text-slate-500 leading-relaxed">バクテリア、塩素、不純物を99.9%除去する特殊多層フィルターを搭載。</p>
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
          </motion.div>

          {/* Card 2: Small */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
            <CheckCircle className="text-emerald-400 mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-3">1年間<br/>メンテ不要</h3>
            <p className="text-slate-400 mt-auto absolute bottom-8">大容量カートリッジ設計</p>
          </motion.div>

          {/* Card 3: Small Image */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="bg-white rounded-3xl border border-slate-200 overflow-hidden relative">
             <Image src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop" fill className="object-cover opacity-80 mix-blend-luminosity" alt="water" />
             <div className="absolute inset-0 bg-blue-900/20"></div>
             <div className="absolute bottom-6 left-6 text-white text-xl font-bold">美肌・美髪効果</div>
          </motion.div>

          {/* Card 4: Wide Span */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }} className="md:col-span-2 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 text-white flex flex-col justify-center items-start">
            <h3 className="text-3xl font-bold mb-4">月々たったのペットボトル数本分</h3>
            <p className="text-blue-100 text-lg mb-6">初期費用無料プランもご用意。ランニングコストを抑えながら、圧倒的な水質改善を実現します。</p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold text-sm hover:shadow-lg transition">料金プランを見る</button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}