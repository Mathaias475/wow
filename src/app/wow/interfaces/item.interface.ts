import { AdditionalStats } from "./additionalStats.interface";
import { Stats } from "./stats.interface";

export interface Item {
  name: string,
  itemLvl: number,
  damage: string,
  stats: Stats[],
  descriptionText: string,
  gearScore: number,
  rare: string,
  additionalStats: AdditionalStats[],
  weaponType: string,
  weaponSpeed: string,
  weaponHands: string,
  jewelerSockets: string[],
  damagePerSecond: number,
  lvlRequired: number,
  avaliablesClasses: string[],
  socketBonus: string,
  icon: string

}