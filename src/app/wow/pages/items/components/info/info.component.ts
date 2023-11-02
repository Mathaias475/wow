import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { BossService } from "src/app/common/services/boss.service";
import { DungeonService } from "src/app/common/services/dungeon.service";
import { ItemsService } from "src/app/common/services/items.service";
import {
  getColorClassByName,
  getColorNameByRarity,
} from "src/app/common/util/utils";
import { Item } from "src/app/wow/interfaces/item.interface";
import { WoWRoutes } from "src/app/wow/wow.routes";

@Component({
  selector: "wow-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"],
})
export class InfoComponent implements OnInit {
  @Output() showChange = new EventEmitter<boolean>();
  @Input() show: boolean = false;
  @Input() selectedItem: Item = {
    name: "",
    itemLvl: 0,
    damage: "",
    isArmor: false,
    isHeroic: false,
    hasHeroic: false,
    stats: [],
    descriptionText: "",
    exhibition: "",
    loot: {
      type: "",
      instance: "",
      boss: "",
    },
    rare: "",
    additionalStats: [],
    itemType: "",
    weaponSpeed: "",
    weaponHands: "",
    itemSlot: "",
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
  routes = WoWRoutes.ROUTES;
  constructor(
    private itemsService: ItemsService,
    private router: Router,
    private bossService: BossService,
    private dungeonService: DungeonService
  ) {}
  ngOnInit(): void {
    if (!this.selectedItem) this.showChange.emit(false);
  }

  defineJewelerLabel(colorSocket: string) {
    switch (colorSocket) {
      case "red":
        return "Ranura roja";
      case "blue":
        return "Ranura azul";
      case "yellow":
        return "Ranura amarilla";
      default:
        return "";
    }
  }
  goToInstances(item: Item) {
    this.router.navigate([
      item.loot.type === "dungeon"
        ? this.routes.Dungeons.fullPath
        : this.routes.Raids.fullPath
    ]);
    this.itemsService.setItem(item);
    this.bossService.setBoss(item.loot.boss);
    this.dungeonService.setDungeon(item.loot.instance);
  }
  goBack() {
    this.showChange.emit(false);
    this.selectedItem = {
      name: "",
      itemLvl: 0,
      exhibition: "",
      isArmor: false,
      isHeroic: false,
      hasHeroic: false,
      damage: "",
      stats: [],
      descriptionText: "",
      loot: {
        type: "",
        instance: "",
        boss: "",
      },
      rare: "",
      additionalStats: [],
      itemType: "",
      weaponSpeed: "",
      weaponHands: "",
      itemSlot: "",
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
  }

  getColorClass(name: string) {
    return getColorClassByName(name);
  }
  getColorName(rarity: string) {
    return getColorNameByRarity(rarity);
  }
}
