import Head from "next/head";
import { useState } from "react";

export default function Home() {
  // 単元の初期値などの設定
  const [unit, setUnit] = useState("");

  // 単元を選択する関数を作成
  const showUnit = () => {
    // ランダム値の生成
    //
  };

  // 単元リストの設定
  const units = ["光と音", "電流", "天気", "生物", "イオン", "力と圧力"];

  return (
    <div>
      <Head>
        <title>自由自在理科ランダム</title>
      </Head>

      <main className="text-gray-600 flex justify-center items-center flex-col">
        <h1 className="my-5 font-bold text-2xl">自由自在理科：STEP1ランダム問題集</h1>

        {/* 単元表示部分 */}
        <div className="bg-gray-200 my-1 px-10 py-2 rounded w-screen">ここに単元を表示</div>
        <button className="bg-gray-700 text-white my-1 px-10 py-2 rounded w-screen">単元を選択</button>

        {/* 問題番号表示部分 */}
        <div className="bg-gray-200 my-1 px-10 py-2 w-screen">ここに問題番号を表示</div>
        <button className="bg-gray-700 text-white my-1 text-white px-10 py-2 rounded w-screen">問題を選択</button>
      </main>
    </div>
  );
}
