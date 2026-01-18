import { Boss } from "./boss.interface"

export interface Instance  {
  name: string,
  locationImg: string,
  boss: Boss[],
  background: string
}