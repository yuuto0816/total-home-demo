import Link from "next/link";

export default function Sample2() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F7] text-[#1D1D1F]">
      <h1 className="text-3xl font-serif-ja tracking-widest mb-8">Sample 2 (準備中...)</h1>
      <Link href="/" className="text-gray-500 hover:text-black transition-colors border-b border-gray-500 pb-1">
        &larr; トップに戻る
      </Link>
    </div>
  );
}