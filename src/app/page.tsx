import Link from "next/link";

export default function Portal() {
  const samples = [
    {
      id: 1,
      title: "Sample 1",
      description: "スタイリッシュ＆高品質（ダイナミックな動き・スクロール連動）",
      path: "/sample1",
    },
    {
      id: 2,
      title: "Sample 2",
      description: "親しみやすさ＆温かみ（流れるようなアニメーション）",
      path: "/sample2",
    },
    {
      id: 3,
      title: "Sample 3",
      description: "無限スクロール・情報量重視（メーカーロゴが流れる配置）",
      path: "/sample3",
    },
    {
      id: 4,
      title: "Sample 4",
      description: "エディトリアル＆マガジン風（写真が主役）",
      path: "/sample4",
    },
    {
      id: 5,
      title: "Sample 5",
      description: "ワンページ・ストーリーテリング（縦スクロールで完結）",
      path: "/sample5",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#F5F5F7] text-[#1D1D1F] p-8 md:p-16 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl md:text-5xl font-serif-ja tracking-widest text-center mb-16">
          AQUA BOOST <br />
          <span className="text-lg md:text-2xl mt-4 block text-gray-500">HP Design Samples</span>
        </h1>

        <div className="grid gap-6">
          {samples.map((sample) => (
            <Link
              key={sample.id}
              href={sample.path}
              className="block p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group translate-y-0 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-sans tracking-widest mb-2 text-black group-hover:text-blue-600 transition-colors">
                    {sample.title}
                  </h2>
                  <p className="text-gray-500 font-serif-ja tracking-wider text-sm">
                    {sample.description}
                  </p>
                </div>
                <div className="text-gray-300 group-hover:text-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
