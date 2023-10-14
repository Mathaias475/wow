import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WoWRoutes } from 'src/app/wow/wow.routes';

@Component({
  selector: 'wow-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showDropDown = false;
  routes = WoWRoutes.ROUTES;
  
  options = [
    {
      name: 'Items',
      route: this.routes.Items.fullPath,
      icon: '/assets/icons/bag.png',
    },
    {
      name: 'Characters',
      route: this.routes.Characters.fullPath,
      icon: '',
    },
    {
      name: 'Professions',
      route: this.routes.Professions.fullPath,
      icon: '',
    },
    {
      name: 'Dungeons',
      route: this.routes.Dungeons.fullPath,
      icon: '/assets/icons/bag.png',
    },
    {
      name: 'Battlegrounds',
      route: this.routes.Battlegrounds.fullPath,
      icon: '/assets/icons/bag.png',
    },
    {
      name: 'Raids',
      route: this.routes.Raids.fullPath,
      icon: '/assets/icons/bag.png',
    },
  ];
  constructor(private router: Router) {}

  redirectTo(route: string) {
    this.showDropDown = false;
    this.router.navigate([route]);
  }

  goToHome() {
    this.router.navigate([this.routes.Home.fullPath]);
  }
  showDropDownOptions() {
    this.showDropDown = !this.showDropDown;
    if(this.showDropDown == true) { 
      this.getCharactersIcon();
      this.getProfessionsIcon(); 
    }
  }
  getCharactersIcon() {
    let number = Math.random();
    let result = Math.floor(number * 12) + 1;
    this.options[1].icon = '/assets/img/classes/'+result+'.png'
  }
  getProfessionsIcon() {
    let number = Math.random();
    let result = Math.floor(number * 15) + 1;
    this.options[2].icon = '/assets/img/professions/'+result+'.png'
  }
}
