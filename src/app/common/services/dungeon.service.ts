import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class DungeonService {
  private dungeon!: string;

  setDungeon(dungeon: string) {
    this.dungeon = dungeon;
  }

  getDungeon() {
    return this.dungeon;
  }
  
}