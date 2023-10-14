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
      icon: '',
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
      icon: '',
    },
    {
      name: 'Battlegrounds',
      route: this.routes.Battlegrounds.fullPath,
      icon: '',
    },
    {
      name: 'Raids',
      route: this.routes.Raids.fullPath,
      icon: '',
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
      this.setIconForOption(this.options, 0, 'bags', 4);
      this.setIconForOption(this.options, 1, 'classes', 12);
      this.setIconForOption(this.options, 2, 'professions', 15);
      this.setIconForOption(this.options, 3, 'dungeon-rols', 3);
      this.setIconForOption(this.options, 4, 'battlegrounds', 2);
      this.setIconForOption(this.options, 5, 'raids', 3);
      setTimeout(()=>{
        this.showDropDown == false;
        console.log('asd'); 
      },500);
    }
  }
  getRandomIcon(type: string, maxRange: number) {
    const number = Math.random();
    const result = Math.floor(number * maxRange) + 1;
    return `/assets/img/${type}/${result}.png`;
  }
  
  setIconForOption(options:{icon: string, name: string, route: string}[], index: number, type: string, maxRange: number) {
    options[index].icon = this.getRandomIcon(type, maxRange);
  }
  
}
