import { Injectable } from "@angular/core";
import { CacheStore } from "src/app/wow/interfaces/cacheStore.interface";
import { HttpClient } from '@angular/common/http';
import { Item } from "src/app/wow/interfaces/item.interface";
import { Observable, map, tap } from "rxjs";


@Injectable({ providedIn: "root" })
export class ItemsService {

private itemsUrl = '/assets/json-data/items.json'

  constructor(private http: HttpClient) {}

  cacheStore: CacheStore = {
    byItem: {
      term: "",
      items: [],
    },
  };

  getItems(term: string): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl).pipe(
      map((data: Item[]) => {
      return data.filter((res: Item) => res.name.includes(term));
        
      }),
      tap(filteredItems => {
        this.cacheStore.byItem.items = filteredItems;
        this.cacheStore.byItem.term = term;
      })
    );
  }
}
/*  */