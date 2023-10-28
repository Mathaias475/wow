import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getColorClassByName, getColorNameByRarity } from 'src/app/common/util/utils';
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
    isArmor: false,
    stats: [],
    descriptionText: '',
    exhibition: '',
    loot: {
      type: "",
      instance: "",
      boss: ""
    },
    rare: '',
    additionalStats: [],
    itemType: '',
    weaponSpeed: '',
    weaponHands: '',
    itemSlot: '',
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
      case 'blue':
        return 'Ranura azul';
      case 'yellow':
        return 'Ranura amarilla';
       default:
        return ''; 
    }
  }
  goBack() {
    this.showChange.emit(false);
    this.selectedItem = {
      name: '',
      itemLvl: 0,
      exhibition: '',
      isArmor: false,
      damage: '',
      stats: [],
      descriptionText: '',
      loot: {
        type: "",
        instance: "",
        boss: ""
      },
      rare: '',
      additionalStats: [],
      itemType: '',
      weaponSpeed: '',
      weaponHands: '',
      itemSlot: "",
      jewelerSockets: [],
      damagePerSecond: 0,
      lvlRequired: 0,
      avaliablesClasses: [],
      socketBonus: '',
      icon: ''
    }
  }

  getColorClass(name: string) {
    return getColorClassByName(name);
  }
  getColorName(rarity: string) {
    return getColorNameByRarity(rarity);
   }
}
