import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WoWRoutes } from '../../wow.routes';
import { BackgroundService } from 'src/app/common/services/background.service';


@Component({
  selector: 'wow-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  showCards = false;

  routes = WoWRoutes.ROUTES;
  constructor(private router: Router, private backgroundService: BackgroundService) { }
  bgImg = this.backgroundService.getRandomBackground(this.router.url, 3);
  cards = [
    {
      icon: '',
      text: 'Items: informacion de items como rareza, porcentaje de drop, informacion del item, donde encontrarlos y stats.',
      route: this.routes.Items.fullPath,
      btnText: 'Ir a items',
    },
    {
      icon: '',
      text: 'Clases: descripcion de los beneficios y prejuicios de cada clase.',
      route: this.routes.Characters.fullPath,
      btnText: 'Ir a clases',
    },
    {
      icon: '',
      text: 'Profesiones: guia para subir las profesiones de 1 a 450.',
      route: this.routes.Professions.fullPath,
      btnText: 'Ir a profesiones',
    },
    {
      icon: '',
      text: 'Calabozos: guia de jefes de calabozos para la expansion Warth of the Lich King',
      route: this.routes.Dungeons.fullPath,
      btnText: 'Ir a calabozos',
    },
    {
      icon: '',
      text: 'Campos de batalla: descubre las diversas formas de hacer PvP en World of Warcraft',
      route: this.routes.Battlegrounds.fullPath,
      btnText: 'Ir a campos de batalla',
    },
    {
      icon: '',
      text: 'Bandas: informate sobre los mayores desafios PvE para obtener los mejores equipamientos',
      route: this.routes.Raids.fullPath,
      btnText: 'Ir a bandas',
    }
  ]

  ngOnInit(): void {
    this.setIconForCard(this.cards, 0, 'bags', 4);
    this.setIconForCard(this.cards, 1, 'classes', 12);
    this.setIconForCard(this.cards, 2, 'professions', 15);
    this.setIconForCard(this.cards, 3, 'dungeon-rols', 3);
    this.setIconForCard(this.cards, 4, 'battlegrounds', 2);
    this.setIconForCard(this.cards, 5, 'raids', 3);
    setTimeout(() =>{
      this.showCards = true;
    }, 100);
  }

   getRandomIcon(type: string, maxRange: number) {
    const number = Math.random();
    const result = Math.floor(number * maxRange) + 1;
    return `/assets/img/${type}/${result}.png`;
  }
  
  setIconForCard(cards:{icon: string, text: string}[], index: number, type: string, maxRange: number) {
    cards[index].icon = this.getRandomIcon(type, maxRange);
  }

  redirectToPage(route: string) {
    this.router.navigate([route]);
  }
  
}
