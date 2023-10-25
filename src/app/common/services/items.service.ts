import { Injectable } from "@angular/core";
import { CacheStore } from "src/app/wow/interfaces/cacheStore.interface";
import { Item } from "src/app/wow/interfaces/item.interface";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "firebase.config";
import { child, get, getDatabase, ref } from "firebase/database";

@Injectable({ providedIn: "root" })
export class ItemsService {

  private app = initializeApp(firebaseConfig);
  private db = getDatabase(this.app);

  cacheStore: CacheStore = {
    byItem: {
      term: "",
      items: [],
    },
  };

  async getItems(term: string): Promise<Item[] | void> {
    term = term.toLowerCase();
    const dbref = ref(this.db);

    try {
      const snapshot = await get(child(dbref, "/Items"));
      const data = snapshot.val();

      if (data) {
        const filteredItems = data.filter((res: Item) =>
          res.name.toLowerCase().includes(term)
        );
        this.cacheStore.byItem.items = filteredItems;
        this.cacheStore.byItem.term = term;
        return filteredItems;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}
