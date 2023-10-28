import { Item } from "./item.interface"
import { Instance } from "./instance.interface"
import { Boss } from "./boss.interface"

export interface CacheStore {
  byItem: {
    term: string,
    items: Item[]
  }
  byDungeon: {
    term: string,
    dungeons: Instance[]
  }
  byRaid: {
    term: string,
    raids: Instance[]
  },
  byBoss: {
    term: string,
    bosses: Boss[]
  }
}