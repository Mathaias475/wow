import { Item } from "./item.interface"

export interface Boss {
  name: string,
  abilities: [{
    name: string,
    description: string,
    damage: string,
    cooldown: string
  }],
  fases: number,
  loot: Item[],
  img: string
}