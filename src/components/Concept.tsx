"use client";

export default function Concept() {
  return (
    <section className="w-full h-screen min-h-[800px] flex flex-col justify-center items-center py-32 px-4 relative max-w-[1200px] mx-auto text-center border-t border-[#1D1D1F]">
      <div className="mb-24">
        <h2 className="text-[0.65rem] tracking-[0.3em] uppercase mb-4 border-b border-[#1D1D1F] pb-4 inline-block">
          Concept
        </h2>
      </div>

      <div className="font-serif-ja text-xl md:text-3xl leading-loose tracking-[0.3em] space-y-12">
        <p>水が変われば、暮らしの質が変わる。</p>
        <p>私たちは「飲む水」だけでなく、</p>
        <p>肌に触れるすべての水に着目しました。</p>
        <p>不純物を極限まで取り除き、</p>
        <p>大自然の湧き水のような清らかさへ。</p>
        <p>それは、目に見えない贅沢。</p>
      </div>

      <div className="absolute top-1/2 -left-8 md:flex flex-col items-center gap-4 hidden rotate-180">
        <span className="w-[1px] h-32 bg-[#1D1D1F]"></span>
        <span className="font-sans font-thin tracking-[0.4em] text-[10px] uppercase rotate-90 w-max text-gray-400">
          The art of purification
        </span>
      </div>
    </section>
  );
}
