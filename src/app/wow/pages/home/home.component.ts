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
      icon: '/assets/icons/bag.png',
      text: 'Items: informacion de items como rareza, porcentaje de drop, informacion del item, donde encontrarlos y stats.'
    },
    {
      icon: '',
      text: 'Clases: descripcion de los beneficios y prejuicios de cada clase.'
    },
    {
      icon: '',
      text: 'Profesiones: guia para subir las profesiones de 1 a 450.'
    }
  ]

  ngOnInit(): void {
    this.getCharactersIcon();
    this.getProfessionsIcon();
    setTimeout(() =>{
      this.showCards = true;
    }, 100);
  }

  getCharactersIcon() {
    let number = Math.random();
    let result = Math.floor(number * 12) + 1;
    this.cards[1].icon = '/assets/img/classes/'+result+'.png'
  }
  getProfessionsIcon() {
    let number = Math.random();
    let result = Math.floor(number * 15) + 1;
    this.cards[2].icon = '/assets/img/professions/'+result+'.png'
  }
}
