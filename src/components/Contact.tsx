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

        <form className="mt-[80px] mx-auto max-w-[720px] max-[480px]:mt-[40px]" onSubmit={(e) => e.preventDefault()}>
          <div className="border-t border-[#ddd] py-[24px] w-full flex items-center max-[480px]:px-[14px] max-[480px]:py-[16px] max-[480px]:flex-wrap">
            <p className="w-full max-w-[248px] tracking-[0.05em] font-bold text-[18px] max-[480px]:max-w-none max-[480px]:flex max-[480px]:items-center max-[480px]:text-[15px]">
              <span className="rounded-[6px] mr-[8px] py-[8px] w-[48px] inline-block text-center bg-[#5bc8ac] text-white text-[14px] max-[480px]:rounded-[4px] max-[480px]:py-[4px] max-[480px]:w-[32px] max-[480px]:text-[10px]">必須</span>
              会社名
            </p>
            <input 
              type="text" 
              className="border border-[#ddd] rounded-[6px] ml-[40px] px-[1em] h-[48px] flex-1 w-full max-w-[410px] bg-[#eaedf2] text-[18px] outline-none max-[480px]:ml-0 max-[480px]:mt-[18px] max-[480px]:h-[40px] max-[480px]:flex-initial max-[480px]:text-[15px]" 
              placeholder="例）株式会社令和" 
            />
          </div>

          <div className="border-t border-[#ddd] py-[24px] w-full flex items-center max-[480px]:px-[14px] max-[480px]:py-[16px] max-[480px]:flex-wrap">
            <p className="w-full max-w-[248px] tracking-[0.05em] font-bold text-[18px] max-[480px]:max-w-none max-[480px]:flex max-[480px]:items-center max-[480px]:text-[15px]">
              <span className="rounded-[6px] mr-[8px] py-[8px] w-[48px] inline-block text-center bg-[#5bc8ac] text-white text-[14px] max-[480px]:rounded-[4px] max-[480px]:py-[4px] max-[480px]:w-[32px] max-[480px]:text-[10px]">必須</span>
              氏名
            </p>
            <input 
              type="text" 
              className="border border-[#ddd] rounded-[6px] ml-[40px] px-[1em] h-[48px] flex-1 w-full max-w-[410px] bg-[#eaedf2] text-[18px] outline-none max-[480px]:ml-0 max-[480px]:mt-[18px] max-[480px]:h-[40px] max-[480px]:flex-initial max-[480px]:text-[15px]" 
              placeholder="例）山田太郎" 
            />
          </div>

          <div className="border-t border-[#ddd] py-[24px] w-full flex items-center max-[480px]:px-[14px] max-[480px]:py-[16px] max-[480px]:flex-wrap">
            <p className="w-full max-w-[248px] tracking-[0.05em] font-bold text-[18px] max-[480px]:max-w-none max-[480px]:flex max-[480px]:items-center max-[480px]:text-[15px]">
              <span className="rounded-[6px] mr-[8px] py-[8px] w-[48px] inline-block text-center bg-[#5bc8ac] text-white text-[14px] max-[480px]:rounded-[4px] max-[480px]:py-[4px] max-[480px]:w-[32px] max-[480px]:text-[10px]">必須</span>
              電話番号
            </p>
            <input 
              type="tel" 
              className="border border-[#ddd] rounded-[6px] ml-[40px] px-[1em] h-[48px] flex-1 w-full max-w-[410px] bg-[#eaedf2] text-[18px] outline-none max-[480px]:ml-0 max-[480px]:mt-[18px] max-[480px]:h-[40px] max-[480px]:flex-initial max-[480px]:text-[15px]" 
              placeholder="例）000-0000-0000" 
            />
          </div>

          <div className="border-t border-[#ddd] py-[24px] w-full flex items-center max-[480px]:px-[14px] max-[480px]:py-[16px] max-[480px]:flex-wrap">
            <p className="w-full max-w-[248px] tracking-[0.05em] font-bold text-[18px] max-[480px]:max-w-none max-[480px]:flex max-[480px]:items-center max-[480px]:text-[15px]">
              <span className="rounded-[6px] mr-[8px] py-[8px] w-[48px] inline-block text-center bg-[#5bc8ac] text-white text-[14px] max-[480px]:rounded-[4px] max-[480px]:py-[4px] max-[480px]:w-[32px] max-[480px]:text-[10px]">必須</span>
              メールアドレス
            </p>
            <input 
              type="email" 
              className="border border-[#ddd] rounded-[6px] ml-[40px] px-[1em] h-[48px] flex-1 w-full max-w-[410px] bg-[#eaedf2] text-[18px] outline-none max-[480px]:ml-0 max-[480px]:mt-[18px] max-[480px]:h-[40px] max-[480px]:flex-initial max-[480px]:text-[15px]" 
              placeholder="例）example@gmail.com" 
            />
          </div>

          <div className="border-t border-b border-[#ddd] py-[24px] w-full flex items-center max-[480px]:px-[14px] max-[480px]:py-[16px] max-[480px]:flex-wrap">
            <p className="w-full max-w-[248px] tracking-[0.05em] font-bold text-[18px] max-[480px]:max-w-none max-[480px]:flex max-[480px]:items-center max-[480px]:text-[15px] mt-[8px] mb-auto max-[480px]:mt-0">
              <span className="rounded-[6px] mr-[8px] py-[8px] w-[48px] inline-block text-center bg-[#5bc8ac] text-white text-[14px] max-[480px]:rounded-[4px] max-[480px]:py-[4px] max-[480px]:w-[32px] max-[480px]:text-[10px]">必須</span>
              お問い合わせ内容
            </p>
            <textarea 
              className="border border-[#ddd] rounded-[6px] ml-[40px] py-[12px] px-[1em] h-[216px] flex-1 w-full max-w-[410px] bg-[#eaedf2] text-[18px] outline-none resize-none max-[480px]:mt-[18px] max-[480px]:ml-0 max-[480px]:h-[200px] max-[480px]:flex-initial max-[480px]:text-[15px]"
            ></textarea>
          </div>
          
          <input 
            type="submit" 
            className="rounded-[6px] mt-[32px] mx-auto py-[20px] w-[280px] block tracking-[0.05em] bg-[#5bc8ac] text-white font-bold text-[20px] cursor-pointer hover:bg-[#4eb399] transition-colors max-[480px]:mt-[24px] max-[480px]:py-[8px] max-[480px]:w-[160px] max-[480px]:text-[16px]" 
            value="送信する" 
          />
        </form>
      </div>
    </section>
  );
}
