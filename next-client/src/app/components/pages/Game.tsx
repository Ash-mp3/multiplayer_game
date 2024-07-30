"use client"
import { useState } from "react";

export default function Game() {
    const [health, setHealth] = useState(0);
    const [level, setLevel] = useState(0);

    return (
      <div className="mainDiv flex flex-col justify-center items-center gap-10 bg-slate-950 h-full w-full">
        <div className="controls bg-slate-500 w-[80%] h-[10%] p-1 flex gap-2">
          <button className="bg-black text-white p-2 rounded-md" onClick={() => setLevel(level + 1)}>Level Up</button>
          <button className="bg-black text-white p-2 rounded-md" onClick={() => setLevel(level - 1)}>Level Down</button>
          <button className="bg-black text-white p-2 rounded-md" onClick={() => setHealth(health + 1)}>- Health</button>
          <button className="bg-black text-white p-2 rounded-md" onClick={() => setHealth(health - 1)}>+ Health</button>
        </div>
        <div className="stats bg-slate-500 w-[80%] h-[10%] p-1">
          <p>Stats</p>
          <div className="level">Level: <span>{level}</span></div>
          <div className="health">Health: <span>{health}</span></div>
        </div>
      </div>
    );
  }