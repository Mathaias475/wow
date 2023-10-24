import { Injectable } from "@angular/core";
import { CacheStore } from "src/app/wow/interfaces/cacheStore.interface";
import { HttpClient } from '@angular/common/http';
import { Item } from "src/app/wow/interfaces/item.interface";
import { map, tap } from "rxjs";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "firebase.config";
import { DataSnapshot, child, get, getDatabase, ref } from 'firebase/database';



@Injectable({ providedIn: "root" })
export class ItemsService {

private itemsUrl = firebaseConfig.databaseURL;

private app = initializeApp(firebaseConfig);
private db = getDatabase(this.app);


constructor(private http: HttpClient) { }



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
      const snapshot = await get(child(dbref, '/Items'));
      const data = snapshot.val();
  
      if (data) {
        const filteredItems = data.filter((res: Item) => res.name.toLowerCase().includes(term));
        this.cacheStore.byItem.items = filteredItems;
        this.cacheStore.byItem.term = term;
        return filteredItems;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

}
