"use client";
import React from 'react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 2.8 12 3 10c1-1.3 3.5-1.5 5-1.5-2.2-2.2-2.7-5.5-1-8 3.5 4.3 8.3 7 13.5 7.5.3-2.6 1.8-4.5 4-5.5-1.5.5-2.8 1.5-3.5 2.5z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#1D1D1F] px-4 md:px-8 bg-[#F5F5F7]">
      <div className="max-w-[1200px] mx-auto py-24 md:py-32 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <div>
            <h2 className="font-sans font-thin tracking-tighter text-2xl uppercase mb-4 text-[#1D1D1F]">
              AQUA BOOST PREMIUM
            </h2>
            <p className="font-serif-ja text-xs tracking-widest leading-loose text-gray-500">
              家中丸ごとオール浄水
            </p>
          </div>
          <div className="mt-16 md:mt-auto">
            <p className="font-sans text-[9px] tracking-[0.2em] text-gray-400 uppercase">
              © {new Date().getFullYear()} Aqua Boost Premium. All rights reserved.
            </p>
          </div>
        </div>

        <div className="col-span-1 flex flex-col gap-8">
          <div>
            <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase mb-6 text-gray-400">Navigation</h3>
            <ul className="flex flex-col gap-4">
              {['Concept', 'Features', 'Specifications', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="font-sans font-light text-sm tracking-wider text-[#1D1D1F] hover:text-gray-500 transition-colors uppercase">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-1 flex flex-col gap-8">
          <div>
            <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase mb-6 text-gray-400">Social</h3>
            <div className="flex gap-6">
              <a href="#" className="text-[#1D1D1F] hover:text-gray-500 transition-colors p-2 border border-[#1D1D1F] hover:border-gray-500 rounded-full">
                <InstagramIcon />
              </a>
              <a href="#" className="text-[#1D1D1F] hover:text-gray-500 transition-colors p-2 border border-[#1D1D1F] hover:border-gray-500 rounded-full">
                <TwitterIcon />
              </a>
            </div>
          </div>
          <div className="mt-auto pt-12 md:pt-0">
            <a href="#" className="inline-block font-sans text-[10px] tracking-[0.2em] text-[#1D1D1F] hover:text-gray-500 transition-colors border-b border-[#1D1D1F] pb-1 uppercase">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
