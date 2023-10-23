import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
    weaponSpeed: 0,
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
      weaponSpeed: 0,
      weaponHands: '',
      jewelerSockets: [],
      damagePerSecond: 0,
      lvlRequired: 0,
      avaliablesClasses: [],
      socketBonus: '',
      icon: ''
    }
  }
}
