"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-start font-sans font-light tracking-widest text-xs">
        <p>AQUA BOOST PREMIUM</p>
        <p>REDEFINING PURE WATER.</p>
      </div>

      <div className="text-center">
        <h1 className="font-sans font-thin tracking-tighter leading-none" style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}>
          AQUA BOOST
        </h1>
        <p className="mt-8 font-serif-ja text-lg tracking-[0.5em] md:text-2xl md:tracking-[1em] ml-[0.5em] md:ml-[1em]">
          家中丸ごとオール浄水
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end border-b border-[#1D1D1F]">
        <div className="w-[1px] h-16 bg-[#1D1D1F]"></div>
        <p className="font-sans font-light text-[0.65rem] tracking-widest uppercase">
          Scroll to explore
        </p>
      </div>
    </section>
  );
}
