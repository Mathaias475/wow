import { Component, OnInit } from "@angular/core";
import { BackgroundService } from "src/app/common/services/background.service";
import { Instance } from "../../interfaces/instance.interface";
import { DataService } from "src/app/common/services/data.service";
import { DungeonService } from "src/app/common/services/dungeon.service";

@Component({
  selector: "app-dungeons",
  templateUrl: "./dungeons.component.html",
  styleUrls: ["./dungeons.component.scss"],
})
export class DungeonsComponent implements OnInit {
  dungeons: Instance[] = [];
  filter = "";
  hasSelected = false;
  /* dungeonFromItem: Instance[] = {
    name: "",
    locationImg: "",
    boss: [],
    background: "",
  } */

  selectedDungeon: Instance = {
    name: "",
    locationImg: "",
    boss: [],
    background: "",
  };
  bgImg = this.backgroundService.getBackground("dungeons", 3);
  constructor(
    private backgroundService: BackgroundService,
    private dataService: DataService,
    private dungeonService: DungeonService
  ) {}

  ngOnInit() {
    this.filter = this.dataService.cacheStore.byDungeon.term
    this.dataService.cacheStore.byDungeon.term != ""
      ? this.searchDungeon(this.dataService.cacheStore.byDungeon.term)
      : this.searchDungeon("");
    if(this.dungeonService.getDungeon()) {

    }
    
  }

  async searchDungeon(name: string) {
    const response = await this.dataService.getData(name, "Dungeons");
    this.dungeons = response ? response : [];
    return response;
  }
  selectDungeon(dungeon: Instance) {
    this.selectedDungeon = dungeon;
    this.hasSelected = !this.hasSelected;
    this.dungeonService.setDungeon(dungeon.name);
  }
}
