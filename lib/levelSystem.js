export function calculateLevel(xp) {
  const level = Math.floor(xp / 100); // Level up every 100 XP
  const nextLevelXP = (level + 1) * 100;
  return { level, nextLevelXP };
}
