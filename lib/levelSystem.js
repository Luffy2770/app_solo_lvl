export const player = {
  name: "SoloPlayer",
  level: 1,
  xp: 0,
  xpToNextLevel: 100,
  stats: {
    strength: 5,
    intelligence: 5,
    agility: 5,
    spiritualPower: 5,
  },
};

export function gainXP(amount) {
  player.xp += amount;

  while (player.xp >= player.xpToNextLevel) {
    player.xp -= player.xpToNextLevel;
    player.level += 1;
    player.xpToNextLevel = player.level * player.level * 50;

    // Auto increase stats
    player.stats.strength += 1;
    player.stats.intelligence += 1;
    player.stats.agility += 1;
    player.stats.spiritualPower += 1;

    console.log(`🔥 Leveled up! Now Level ${player.level}`);
  }
}

export function calculateLevel(xp) {
  return Math.floor(Math.sqrt(xp / 50));
}

