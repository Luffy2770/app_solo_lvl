

export function levelUp(player) {
  player.level += 1;
  player.xp = 0;
  player.xpToNextLevel = getXPForNextLevel(player.level);
  player.hp += 10;
  player.strength += 5;
  player.intelligence += 3;
}

export function gainXP(player, amount) {
  player.xp += amount;
  while (player.xp >= player.xpToNextLevel) {
    player.xp -= player.xpToNextLevel;
    levelUp(player);
  }
}

export function getXPForNextLevel(level) {
  // RPG-style XP curve
  return level * level * 50;
}
