import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/common/services/items.service';
import { Boss } from 'src/app/wow/interfaces/boss.interface';
import { WoWRoutes } from 'src/app/wow/wow.routes';
import { Item } from 'src/app/wow/interfaces/item.interface';

@Component({
  selector: 'wow-boss',
  templateUrl: './boss.component.html',
  styleUrls: ['./boss.component.scss']
})
export class BossComponent {

  @Input() boss: Boss = {
    name: '',
    abilities: [{
      name: '',
      description: '',
      damage: '',
      cooldown: ''
    }],
    fases: 0,
    loot: [],
    img: ''
  }
  constructor (private itemsService: ItemsService, private router: Router) {}
  routes = WoWRoutes.ROUTES;
 
  goToItems(item: Item) {
    this.itemsService.setItem(item);
    this.router.navigate([this.routes.Items.fullPath]);
  }
}
