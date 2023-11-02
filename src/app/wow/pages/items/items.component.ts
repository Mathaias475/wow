import { Component, OnInit } from "@angular/core";
import { BackgroundService } from "src/app/common/services/background.service";
import { DataService } from "src/app/common/services/data.service";
import { Item } from '../../interfaces/item.interface';
import { getColorNameByRarity, getColorBoxShadowByRarity } from "src/app/common/util/utils";
import { ItemsService } from "src/app/common/services/items.service";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"],
})
export class ItemsComponent implements OnInit{

  bgImg = this.backgroundService.getBackground("items", 2);
  items : Item[] = [];
  showItem = false;
  filter = '';
  selectedItem: Item = {
    name: "",
    itemLvl: 0,
    damage: "",
    isHeroic: false,
    hasHeroic: false,
    stats: [],
    descriptionText: "",
    loot: {
      type: "",
      instance: "",
      boss: ""
    },
    exhibition: '',
    isArmor: false,
    rare: "",
    itemSlot: "",
    additionalStats: [],
    itemType: "",
    weaponSpeed: '',
    weaponHands: "",
    jewelerSockets: [],
    damagePerSecond: 0,
    lvlRequired: 0,
    avaliablesClasses: [],
    socketBonus: "",
    icon: "",
    itemVersion: "",
    heroicAdditionalStats: [],
    heroicStats: [],
    heroicItemLvl: 0
  };

  constructor(
    private backgroundService: BackgroundService,
    private dataService: DataService,
    private itemsService: ItemsService
  ) {}

 ngOnInit(): void {
  let itemFromBoss = this.itemsService.getItem();
  this.selectItem(itemFromBoss);
  this.filter = this.dataService.cacheStore.byItem.term;
  (this.dataService.cacheStore.byItem.term != '') ?
  this.items = this.dataService.cacheStore.byItem.items :
   this.searchItem('');
}

getColorName(rarity: string) {
 return getColorNameByRarity(rarity);
}

getBoxShadowColor(rarity: string) {
  return getColorBoxShadowByRarity(rarity);
}

 async searchItem(name: string) {
  const response = await this.dataService.getData(name, "Items");
  this.items = response ? response : [];
  }
  selectItem(item: Item) {
    this.selectedItem = item;
    this.showItem = !this.showItem;
  }
}
