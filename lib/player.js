"use client";
import { player, gainXP } from "@/lib/levelSystem";

gainXP(300); // Simulate XP gain
console.log(player);

export default function Home() {
  return (
    <main>
      <h1>Welcome, {player.name}</h1>
      <p>Level: {player.level}</p>
      <p>XP: {player.xp} / {player.xpToNextLevel}</p>
      <p>Strength: {player.stats.strength}</p>
      <p>Intelligence: {player.stats.intelligence}</p>
      <p>Agility: {player.stats.agility}</p>
      <p>Spiritual Power: {player.stats.spiritualPower}</p>
    </main>
  );
}

