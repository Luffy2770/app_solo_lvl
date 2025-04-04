import { useState, useEffect } from "react";

const initialStats = {
  xp: 0,
  level: 1,
  title: "Lowly Human",
  stats: {
    focus: 1,
    physical: 1,
    mental: 1,
    spiritual: 1
  }
};

export default function SystemApp() {
  const [data, setData] = useState(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("system_data") : null;
    return saved ? JSON.parse(saved) : initialStats;
  });

  useEffect(() => {
    localStorage.setItem("system_data", JSON.stringify(data));
  }, [data]);

  const gainXP = (amount) => {
    const newXP = data.xp + amount;
    let newLevel = data.level;
    let newStats = { ...data.stats };
    let newTitle = data.title;

    if (newXP >= 100) {
      newLevel++;
      newStats.focus++;
      newStats.mental++;
      newStats.physical++;
      newStats.spiritual++;
      newTitle = newLevel >= 5 ? "Awakening Initiate" : newTitle;
      return setData({
        xp: newXP - 100,
        level: newLevel,
        title: newTitle,
        stats: newStats
      });
    }

    setData({ ...data, xp: newXP });
  };

  return (
    <div className="min-h-screen bg-black text-blue-400 p-4">
      <div className="text-xl font-bold mb-4">[System Notification] Welcome, {data.title}</div>
      <div className="bg-slate-800 p-4 rounded-lg border border-blue-600 shadow-xl max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-2">Stat Window</h1>
        <p>Title: {data.title}</p>
        <p>Level: {data.level}</p>
        <p>XP: {data.xp}/100</p>
        <div className="bg-slate-700 h-3 rounded mt-1 mb-4 overflow-hidden">
          <div
            className="bg-blue-500 h-full transition-all"
            style={{ width: `${(data.xp / 100) * 100}%` }}
          ></div>
        </div>
        <ul className="space-y-1">
          <li>Mental Resilience: {data.stats.mental}</li>
          <li>Physical Strength: {data.stats.physical}</li>
          <li>Focus: {data.stats.focus}</li>
          <li>Spiritual Awareness: {data.stats.spiritual}</li>
        </ul>
        <button
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          onClick={() => gainXP(10)}
        >
          Gain XP
        </button>
      </div>
    </div>
  );
}