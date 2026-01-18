import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/services/data.service';
import { DungeonService } from 'src/app/common/services/dungeon.service';
import { Boss } from 'src/app/wow/interfaces/boss.interface';
import { Instance } from 'src/app/wow/interfaces/instance.interface';

@Component({
  selector: 'wow-dungeon-info',
  templateUrl: './dungeon-info.component.html',
  styleUrls: ['./dungeon-info.component.scss']
})
export class DungeonInfoComponent implements OnInit{

@Input() dungeon: Instance = {
  name: '',
  locationImg: '',
  boss: [],
  background: ''
}
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
hasSelected = false;

bosses: Boss[] = [];
constructor (private dataService: DataService, private dungeonService: DungeonService) {}

  ngOnInit(): void {
    this.dataService.cacheStore.byDungeon.term != ""
    ? this.searchBoss(this.dataService.cacheStore.byBoss.term)
    : this.searchBoss("");
    console.log(this.dungeonService.getDungeon());

  }
  async searchBoss(name: string) {
    const response = await this.dataService.getData(name, "Bosses");
    this.bosses = response ? response : [];
    return response;
  }
  selectBoss(boss: Boss) {
    this.selectedBoss = boss;
    this.hasSelected = !this.hasSelected
  }
}
