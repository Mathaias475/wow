import { Component, OnInit } from "@angular/core";
import { BackgroundService } from "src/app/common/services/background.service";
import { DataService } from "src/app/common/services/data.service";
import { Mounts } from "../../interfaces/mounts.interface";
import {
  getColorNameByRarity,
  getColorBoxShadowByRarity,
} from "src/app/common/util/utils";
import { MountsService } from "src/app/common/services/mounts.service";
@Component({
  selector: "app-mounts",
  templateUrl: "./mounts.component.html",
  styleUrls: ["./mounts.component.scss"],
})
export class MountsComponent implements OnInit {
  bgImg = this.backgroundService.getBackground("mounts", 3);
  mounts: Mounts[] = [];
  showMount = false;
  filter = "";
  selectedMount: Mounts = {
    mountName: "",
    mountIcon: "",
    loot: {
      boss: "",
      instance: "",
      type: "",
      difficult: "",
    },
    fly: false,
    dropRate: "",
    rare: "",
    description: "",
    required: "",
    use: "",
    expansion: "",
  };

  constructor(
    private backgroundService: BackgroundService,
    private dataService: DataService,
    private mountsService: MountsService
  ) {}

  ngOnInit(): void {
    let mounts = this.mountsService.getMount();
    this.selectMount(mounts);
    this.filter = this.dataService.cacheStore.byMounts.term;
    this.dataService.cacheStore.byMounts.term != ""
      ? (this.mounts = this.dataService.cacheStore.byMounts.mounts)
      : this.searchMounts("");
  }

  getColorName(rarity: string) {
    return getColorNameByRarity(rarity);
  }

  getBoxShadowColor(rarity: string) {
    return getColorBoxShadowByRarity(rarity);
  }

  async searchMounts(mountName: string) {
    const response = await this.dataService.getData(mountName, "Mounts");
    this.mounts = response ? response : [];
  }

  selectMount(mount: Mounts) {
    this.selectedMount = mount;
    this.showMount = !this.showMount;
  }
}
