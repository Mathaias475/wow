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
  showInstance = false;
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

  ngOnInit(): void {
    this.dataService.cacheStore.byDungeon.term != ""
      ? (this.dungeons = this.dataService.cacheStore.byDungeon.dungeons)
      : this.searchDungeon("");
    this.dataService.cacheStore.byBoss.term != ""
      ? (this.bosses = this.dataService.cacheStore.byBoss.bosses)
      : this.searchBoss("");
  }

  async searchDungeon(name: string) {
    const response = await this.dataService.getData(name, "Dungeons");
    this.dungeons = response ? response : [];
  }

  async searchBoss(name: string) {
    const response = await this.dataService.getData(name, "Bosses");
    this.bosses = response ? response : [];
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
