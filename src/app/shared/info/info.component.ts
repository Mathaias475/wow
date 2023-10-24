import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getColorNameByRarity } from 'src/app/common/util/utils';
import { Item } from 'src/app/wow/interfaces/item.interface';

@Component({
  selector: 'wow-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Output() showChange = new EventEmitter<boolean>();
  @Input() show: boolean = false;
  @Input() selectedItem: Item = {
    name: '',
    itemLvl: 0,
    damage: '',
    stats: [],
    descriptionText: '',
    gearScore: 0,
    rare: '',
    additionalStats: [],
    weaponType: '',
    weaponSpeed: '',
    weaponHands: '',
    jewelerSockets: [],
    damagePerSecond: 0,
    lvlRequired: 0,
    avaliablesClasses: [],
    socketBonus: '',
    icon: ''
  }
  ngOnInit(): void {
    console.log(this.selectedItem);
  }

  defineJewelerLabel(colorSocket: string) {
    switch(colorSocket) {
      case 'red':
        return 'Ranura roja';
        break;
      case 'blue':
        return 'Ranura azul';
        break;
      case 'yellow':
        return 'Ranura amarilla';
        break;
       default:
        return ''; 
    }
  }
  goBack() {
    this.showChange.emit(false);
    this.selectedItem = {
      name: '',
      itemLvl: 0,
      damage: '',
      stats: [],
      descriptionText: '',
      gearScore: 0,
      rare: '',
      additionalStats: [],
      weaponType: '',
      weaponSpeed: '',
      weaponHands: '',
      jewelerSockets: [],
      damagePerSecond: 0,
      lvlRequired: 0,
      avaliablesClasses: [],
      socketBonus: '',
      icon: ''
    }
  }

  getColorName(rarity: string) {
    return getColorNameByRarity(rarity);
   }
}
