import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wow-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  showCards = false;

  cards = [
    {
      icon: '',
      text: 'Items: informacion de items como rareza, porcentaje de drop, informacion del item, donde encontrarlos y stats.'
    },
    {
      icon: '',
      text: 'Clases: descripcion de los beneficios y prejuicios de cada clase.'
    },
    {
      icon: '',
      text: 'Profesiones: guia para subir las profesiones de 1 a 450.'
    },
    {
      icon: '',
      text: 'Calabozos: guia de jefes de calabozos para la expancion Warth of the Lich King'
    },
    {
      icon: '',
      text: 'Campos de batalla: descubre las diversas formas de hacer PvP en World of Warcraft'
    },
    {
      icon: '',
      text: 'Bandas: informate sobre los mayores desafios PvE para obtener los mejores equipamientos'
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
  
}
