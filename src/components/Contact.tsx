"use client";
import React from 'react';
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full pt-32 pb-48 px-4 md:px-8 border-t border-[#1D1D1F]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-32 flex flex-col items-center">
          <h2 className="font-sans font-thin text-[10vw] md:text-[6vw] leading-none tracking-tighter uppercase mb-8 text-[#1D1D1F]">
            Inquiry
          </h2>
          <div className="w-[1px] h-16 bg-[#1D1D1F] mb-8"></div>
          <p className="font-serif-ja text-sm tracking-[0.4em] leading-loose text-gray-500">
            理想の水を、あなたの設計図に。<br />
            導入のご相談を承ります。
          </p>
        </div>

        <form className="w-full max-w-[900px] mx-auto flex flex-col" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col md:flex-row border-t border-[#1D1D1F]">
            <label className="w-full md:w-1/4 py-6 md:py-8 text-[9px] tracking-[0.3em] uppercase font-sans flex text-gray-400 md:border-r border-[#1D1D1F] md:pr-8 items-start md:items-center">
              Name
            </label>
            <input
              type="text"
              className="w-full md:w-3/4 bg-transparent py-4 md:py-8 md:px-8 text-xl md:text-2xl font-serif-ja outline-none text-[#1D1D1F] placeholder-gray-300 focus:bg-black/5 transition-colors"
              placeholder="お名前"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row border-t border-[#1D1D1F]">
            <label className="w-full md:w-1/4 py-6 md:py-8 text-[9px] tracking-[0.3em] uppercase font-sans flex text-gray-400 md:border-r border-[#1D1D1F] md:pr-8 items-start md:items-center">
              Phone
            </label>
            <input
              type="tel"
              className="w-full md:w-3/4 bg-transparent py-4 md:py-8 md:px-8 text-xl md:text-2xl font-sans font-light outline-none text-[#1D1D1F] placeholder-gray-300 focus:bg-black/5 transition-colors"
              placeholder="090-1234-5678"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row border-t border-[#1D1D1F]">
            <label className="w-full md:w-1/4 py-6 md:py-8 text-[9px] tracking-[0.3em] uppercase font-sans flex text-gray-400 md:border-r border-[#1D1D1F] md:pr-8 items-start md:items-center">
              Email
            </label>
            <input
              type="email"
              className="w-full md:w-3/4 bg-transparent py-4 md:py-8 md:px-8 text-xl md:text-2xl font-sans font-light outline-none text-[#1D1D1F] placeholder-gray-300 focus:bg-black/5 transition-colors"
              placeholder="mail@example.com"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row border-t border-b border-[#1D1D1F]">
            <label className="w-full md:w-1/4 py-6 md:py-8 text-[9px] tracking-[0.3em] uppercase font-sans flex text-gray-400 md:border-r border-[#1D1D1F] md:pr-8 items-start pt-8">
              Message
            </label>
            <textarea
              className="w-full md:w-3/4 bg-transparent py-4 md:py-8 md:px-8 text-xl md:text-2xl font-serif-ja outline-none text-[#1D1D1F] placeholder-gray-300 resize-none h-48 focus:bg-black/5 transition-colors"
              placeholder="お問い合わせ内容"
            ></textarea>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-8">
            <p className="text-[10px] font-sans tracking-[0.2em] text-gray-400 uppercase">
              * Privacy policy accepted
            </p>
            <button
              type="submit"
              className="group relative flex items-center justify-between w-full md:w-[400px] py-6 px-8 border border-[#1D1D1F] bg-transparent text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-[#F5F5F7] transition-all duration-500 overflow-hidden"
            >
              <span className="font-sans font-light text-[10px] tracking-[0.4em] uppercase relative z-10 pt-1">Send Message</span>
              <ArrowRight size={20} strokeWidth={1} className="transform group-hover:translate-x-2 transition-transform duration-500 relative z-10" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
