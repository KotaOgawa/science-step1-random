import Head from "next/head";
import { useState } from "react";

export default function Home() {
  // 単元の初期値などの設定
  const [unit, setUnit] = useState("「単元を選択」ボタンを押してね");

  // 問題番号の初期値などを設定
  const [num, setNum] = useState("「問題を選択」ボタンを押してね");

  // 累計回答数の初期値などを設定
  const [sum, setSum] = useState(0);

  // 単元を選択する関数を作成
  const selectUnit = () => {
    // ランダム値の生成 → iとして格納
    let i = Math.floor(Math.random() * 16);
    // 単元i番目をsetUnit関数でセット
    setUnit(units[i]);
  };

  // 問題番号を設定する関数（ランダム関数で指定するのみ）
  const getQuestionNumber = () => {
    let random = Math.floor(Math.random() * 42);
    setNum(random + 1);

    // 問題選択ボタンが押されると累計回答数の数をプラス1する
    setSum(sum + 1);
  };

  // 単元リストの設定（0 ~ 15番まで）
  const units = [
    "光と音 p6~",
    "力と圧力 p14~",
    "物質の姿 p22~",
    "気体と水溶液 p30~",
    "電流 p42~",
    "化学変化と原子・分子 p50~",
    "運動とエネルギー p62~",
    "化学変化とイオン p70~",
    "科学技術と人間 p78~",
    "植物の生活と種類 p90~",
    "大地の変化 p98~",
    "生物のからだのつくりと変化 p110~",
    "天気とその変化 p120~",
    "生物の成長と遺伝 p132~",
    "地球と宇宙 p140~",
    "自然と人間 p148~",
  ];

  return (
    <div>
      <Head>
        <title>自由自在理科ランダム</title>
      </Head>

      <main className="px-5 text-gray-600 flex justify-center items-center flex-col">
        <h1 className="my-5 font-bold text-xl">
          自由自在理科：STEP1ランダム問題集
        </h1>

        {/* 単元表示部分 */}
        <div className="bg-gray-200 my-1 px-10 py-2 rounded w-full text-lg">
          {unit}
        </div>
        <button
          onClick={selectUnit}
          className="bg-gray-700 text-white my-1 px-10 py-2 rounded w-full"
        >
          単元を選択
        </button>

        {/* 問題番号表示部分 */}
        <div className="bg-gray-200 my-1 px-10 py-2 w-full text-lg">{num}</div>
        <button
          onClick={getQuestionNumber}
          className="bg-gray-700 text-white my-1 px-10 py-2 rounded w-full"
        >
          問題を選択
        </button>

        {/* 累計回答問題数 */}
        <div className="bg-red-200 mt-10 px-10 py-2 w-full text-sm">
          累計回答数：{sum}
        </div>
      </main>
    </div>
  );
}
