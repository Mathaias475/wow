import { Injectable } from "@angular/core";
import { CacheStore } from "src/app/wow/interfaces/cacheStore.interface";
import { Item } from "src/app/wow/interfaces/item.interface";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "firebase.config";
import { child, get, getDatabase, ref } from "firebase/database";
import { Instance } from "src/app/wow/interfaces/instance.interface";
import { Boss } from "src/app/wow/interfaces/boss.interface";
import { Characters } from "src/app/wow/interfaces/characters.interface";

@Injectable({ providedIn: "root" })
export class DataService {

  private app = initializeApp(firebaseConfig);
  private db = getDatabase(this.app);

  private setLocalStorage() {
    localStorage.setItem('cacheStore',JSON.stringify(this.cacheStore));
  }

  private getLocalStorage() {
    if(!localStorage.getItem('cacheStore')) return;
    this.cacheStore =JSON.parse( localStorage.getItem('cacheStore')!);
  }

  constructor() {
    this.getLocalStorage();
  }


  cacheStore: CacheStore = {
    byItem: {
      term: "",
      items: [],
    },
    byRaid: {
      term: "",
      raids: [] 
    },
    byDungeon: {
      term: "",
      dungeons: [] 
    },
    byBoss: {
      term: "",
      bosses: []
    }
  };
  async getData(
    term: string,
    collection: "Items"
  ): Promise<Item[] | void>;
  async getData(
    term: string,
    collection: "Dungeons"
  ): Promise<Instance[] | void>;
  async getData(
    term: string,
    collection: "Raids"
  ): Promise<Instance[] | void>;
  async getData(
    term: string,
    collection: "Bosses"
  ): Promise<Boss[] | void>;
  async getData(
    term: string,
    collection: "Characters"
  ): Promise<Characters[] | void>;
  
  async getData(term: string, collection: string): Promise<Item[] | Instance[] | Boss[] | Characters[] | void> {
    term = term.toLowerCase();
    const dbref = ref(this.db);
  
    try {
      const snapshot = await get(child(dbref, `/${collection}`));
      const data = snapshot.val();
  
      if (data) {
        if (collection === "Items") {
          
          const filteredItems = data.filter((res: Item) =>
            res.name.toLowerCase().includes(term)
          );
          this.cacheStore.byItem.items = filteredItems;
          this.cacheStore.byItem.term = term;
          this.setLocalStorage(); 
          return filteredItems;
        } else if (collection === "Dungeons") {
          const filteredDungeons = data.filter((res: Instance) =>
            res.name.toLowerCase().includes(term)
          );
          this.cacheStore.byDungeon.dungeons = filteredDungeons;
          this.cacheStore.byDungeon.term = term;
          this.setLocalStorage(); 
          return filteredDungeons;
        } else if (collection === "Raids") {
          const filteredRaids = data.Raids.filter((res: Instance) =>
            res.name.toLowerCase().includes(term)
          );
          this.cacheStore.byRaid.raids = filteredRaids;
          this.cacheStore.byRaid.term = term;
          this.setLocalStorage(); 
          return filteredRaids;
        } else if (collection === "Bosses") {
          const filteredBosses = data.filter((res: Boss) =>
            res.name.toLowerCase().includes(term)
          );
          this.cacheStore.byBoss.bosses = filteredBosses;
          this.cacheStore.byBoss.term = term;
          this.setLocalStorage(); 
          return filteredBosses;
        }else if (collection === "Characters") {
          const filteredCharacters = data.filter((res: Characters) =>
            res.className.toLowerCase().includes(term)
          );
          return filteredCharacters;
        } 
      }
    } catch (error) {
      console.error(`Error: Unable to retrieve data for ${collection}`, error);
    }
  }

}
