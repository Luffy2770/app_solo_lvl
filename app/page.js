import user from '../data/user.json';
import { calculateLevel } from '../lib/levelSystem';

export default function Home() {
  const { level, nextLevelXP } = calculateLevel(user.xp);

  return (
    <main>
      <h1>🧠 Welcome to the System, {user.username}</h1>
      <p>📈 Level: {level}</p>
      <p>💥 XP: {user.xp} / {nextLevelXP}</p>
      <p>🦾 Strength: {user.strength}</p>
      <p>🧠 Intelligence: {user.intelligence}</p>
      <p>🧘 Discipline: {user.discipline}</p>
    </main>
  );
}

