import { Component, OnInit } from "@angular/core";
import { BackgroundService } from "src/app/common/services/background.service";
import { ItemsService } from "src/app/common/services/items.service";
import { Item } from '../../interfaces/item.interface';
import { getColorNameByRarity, getColorBoxShadowByRarity } from "src/app/common/util/utils";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"],
})
export class ItemsComponent implements OnInit{

  bgImg = this.backgroundService.getRandomBackground("items", 2);
  items : Item[] = [];
  showItem = false;
  selectedItem: Item = {
    name: "",
    itemLvl: 0,
    damage: "",
    stats: [],
    descriptionText: "",
    gearScore: 0,
    rare: "",
    additionalStats: [],
    weaponType: "",
    weaponSpeed: '',
    weaponHands: "",
    jewelerSockets: [],
    damagePerSecond: 0,
    lvlRequired: 0,
    avaliablesClasses: [],
    socketBonus: "",
    icon: ""
  };

  constructor(
    private backgroundService: BackgroundService,
    private itemsService: ItemsService
  ) {}

 ngOnInit(): void {

  (this.itemsService.cacheStore.byItem.term != '') ?
  this.items = this.itemsService.cacheStore.byItem.items :
   this.searchItem('');
}

getColorName(rarity: string) {
 return getColorNameByRarity(rarity);
}

getBoxShadowColor(rarity: string) {
  return getColorBoxShadowByRarity(rarity);
}

  searchItem(name: string) {
    this.itemsService.getItems(name).subscribe((res) => {
      this.items = res;
    });
  }
  selectItem(item: Item) {
    this.selectedItem = item;
    this.showItem = true;
  }
}
