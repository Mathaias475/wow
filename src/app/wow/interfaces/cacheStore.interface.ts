import { Item } from "./item.interface"

export interface CacheStore {
  byItem: {
    term: string,
    items: Item[]
  }
}