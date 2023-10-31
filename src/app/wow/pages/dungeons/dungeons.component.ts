import { Component, OnInit } from "@angular/core";
import { BackgroundService } from "src/app/common/services/background.service";
import { Instance } from "../../interfaces/instance.interface";
import { DataService } from "src/app/common/services/data.service";
import { Router } from "@angular/router";
import { WoWRoutes } from "../../wow.routes";
import { Boss } from "../../interfaces/boss.interface";
import { Item } from "../../interfaces/item.interface";
import { ItemsService } from "src/app/common/services/items.service";

@Component({
  selector: "app-dungeons",
  templateUrl: "./dungeons.component.html",
  styleUrls: ["./dungeons.component.scss"],
})
export class DungeonsComponent implements OnInit {
  routes = WoWRoutes.ROUTES;
  dungeons: Instance[] = [];
  bosses: Boss[] = [];
  filter = '';
  showInstance = false;
  itemFromItems: Item = {
    name: "",
    itemLvl: 0,
    damage: "",
    stats: [],
    isArmor: false,
    descriptionText: "",
    exhibition: "",
    rare: "",
    itemSlot: "",
    additionalStats: [],
    itemType: "",
    weaponSpeed: "",
    loot: {
      type: "",
      instance: "",
      boss: "",
    },
    weaponHands: "",
    jewelerSockets: [],
    damagePerSecond: 0,
    lvlRequired: 0,
    avaliablesClasses: [],
    socketBonus: "",
    icon: "",
  };
  showBoss = false;
  selectedBoss: Boss = {
    name: "",
    abilities: [
      {
        name: "",
        description: "",
        damage: "",
        cooldown: "",
      },
    ],
    fases: 0,
    loot: [],
    img: "",
  };
  selectedDungeon: Instance = {
    name: "",
    locationImg: "",
    boss: [],
    background: "",
  };
  bgImg = this.backgroundService.getBackground("dungeons", 3);
  specificBg = "";
  constructor(
    private router: Router,
    private backgroundService: BackgroundService,
    private dataService: DataService,
    private itemsService: ItemsService
  ) {}

  async ngOnInit(): Promise<void> {
    this.filter = this.dataService.cacheStore.byDungeon.term;
    this.dataService.cacheStore.byDungeon.term != ""
      ? (this.dungeons = this.dataService.cacheStore.byDungeon.dungeons)
      : this.searchDungeon("");
    this.dataService.cacheStore.byBoss.term != ""
      ? (this.bosses = this.dataService.cacheStore.byBoss.bosses)
      : this.searchBoss("");
    this.itemFromItems = this.itemsService.getItem();
    if (this.itemFromItems) {
      let dungeon;
      let boss;
      try {
        const resultDungeon = await this.searchDungeon(
          this.itemFromItems.loot.instance
        );
        if (Array.isArray(resultDungeon) && resultDungeon.length > 0) {
          dungeon = resultDungeon[0];
          this.selectDungeon(dungeon);

          const resultBoss = await this.searchBoss(
            this.itemFromItems.loot.boss
          );
          if (Array.isArray(resultBoss) && resultBoss.length > 0) {
            boss = resultBoss[0];
            this.selectBoss(boss);
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }

  async searchDungeon(name: string) {
    const response = await this.dataService.getData(name, "Dungeons");
    this.dungeons = response ? response : [];
    return response;
  }

  async searchBoss(name: string) {
    const response = await this.dataService.getData(name, "Bosses");
    this.bosses = response ? response : [];
    return response;
  }
  selectDungeon(dungeon: Instance) {
    this.selectedDungeon = dungeon;
    this.showInstance = true;
  }
  selectBoss(boss: Boss) {
    this.selectedBoss = boss;
    this.showBoss = true;
    console.log(this.selectedBoss);
  }
  goToItems(item: Item) {
    this.itemsService.setItem(item);
    this.router.navigate([this.routes.Items.fullPath]);
  }
}
