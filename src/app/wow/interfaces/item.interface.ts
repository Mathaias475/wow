import { AdditionalStats } from "./additionalStats.interface";
import { Stats } from "./stats.interface";

export interface Item {
  name: string,
  itemLvl: number,
  damage: string,
  stats: Stats[],
  isArmor: boolean,
  descriptionText: string,
  exhibition: string,
  rare: string,
  itemSlot: string,
  additionalStats: AdditionalStats[],
  itemType: string,
  weaponSpeed: string,
  loot: {
    type: string,
    instance: string,
    boss: string
  }
  weaponHands: string,
  jewelerSockets: string[],
  damagePerSecond: number,
  lvlRequired: number,
  avaliablesClasses: string[],
  socketBonus: string,
  icon: string

}