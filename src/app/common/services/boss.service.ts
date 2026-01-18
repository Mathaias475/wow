import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class BossService {
  private boss!: string;

  setBoss(boss: string) {
    this.boss = boss;
  }

  getBoss() {
    return this.boss;
  }
  
}