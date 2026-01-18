import { Injectable } from '@angular/core';
import { Item } from 'src/app/wow/interfaces/item.interface';

@Injectable({providedIn: 'root'})
export class ItemsService {
  private item!: Item;

  setItem(item: Item) {
    this.item = item;
  }

  getItem() {
    return this.item;
  }
  
}