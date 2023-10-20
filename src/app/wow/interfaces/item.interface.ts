import { AdditionalStats } from "./additionalStats.interface";
import { Stats } from "./stats.interface";

export interface Item {
  filter(arg0: (item: any) => boolean): any;
  name: string,
  itemLvl: number,
  stats: Stats[],
  descriptionText: string,
  gearScore: number,
  rare: string,
  additionalStats: AdditionalStats[],
  weaponType: string,
  weaponSpeed: number,
  weaponHands: string,
  jewelerSockets: string[],
  damagePerSecond: number,
  lvlRequired: number,
  avaliablesClasses: string[],
  socketBonus: string,
  icon: string

}