import { Component, OnInit } from "@angular/core";
import { BackgroundService } from "src/app/common/services/background.service";
import { ItemsService } from "src/app/common/services/items.service";
import { Item } from '../../interfaces/item.interface';

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"],
})
export class ItemsComponent implements OnInit{
  bgImg = this.backgroundService.getRandomBackground("items", 2);
  items : Item[] = [];
  constructor(
    private backgroundService: BackgroundService,
    private itemsService: ItemsService
  ) {}

 ngOnInit(): void {
  this.items = this.itemsService.cacheStore.byItem.items;
  
 }

  searchItem(name: string) {
    this.itemsService.getItems(name).subscribe((res) => {
      this.items = res;
    });

    
  }
}
