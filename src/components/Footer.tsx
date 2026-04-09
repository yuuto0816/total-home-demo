"use client";
import React from 'react';

export default function Footer() {
  return (
    <footer className="p-8 text-[15px] text-[#4b5564] bg-white border-t border-[#1D1D1F]">
      <div className="lg:flex md:justify-between max-w-[1200px] mx-auto">
        <div>
          <a href="#" className="inline-block mb-6 text-3xl font-sans font-thin tracking-tighter text-[#1D1D1F] uppercase hover:text-black transition-colors" style={{ textDecoration: 'none' }}>
            AQUA BOOST PREMIUM
          </a>
          <address className="not-italic mb-8 font-serif-ja tracking-widest leading-loose text-gray-500">
            家中丸ごとオール浄水
          </address>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-6 lg:min-w-[400px]">
          <div>
            <p className="font-semibold mb-4">NAVIGATION</p>
            <ul className="p-0 list-none">
              {['Concept', 'Features', 'Specifications', 'Contact'].map((item) => (
                <li key={item} className="mb-3">
                  <a href={`#${item.toLowerCase()}`} className="text-[#4b5564] no-underline hover:text-black transition-colors uppercase text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:text-right">
            <p className="font-semibold mb-4">ABOUT</p>
            <ul className="p-0 list-none inline-block md:text-right text-left">
              <li className="mb-3"><a href="#" className="text-[#4b5564] no-underline hover:text-black transition-colors text-sm">会社概要</a></li>
              <li className="mb-3"><a href="#contact" className="text-[#4b5564] no-underline hover:text-black transition-colors text-sm">お問い合わせ</a></li>
              <li className="mb-3"><a href="#" className="text-[#4b5564] no-underline hover:text-black transition-colors text-sm">サイトマップ</a></li>
              <li className="mb-3"><a href="#" className="text-[#4b5564] no-underline hover:text-black transition-colors text-sm">プライバシーポリシー</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <hr className="h-[1px] border-0 border-t border-[#e5e7eb] my-8" />
        <p className="text-sm">
          © {new Date().getFullYear()} <a href="#" className="text-[#4b5564] no-underline hover:text-black transition-colors">Aqua Boost Premium</a>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
