import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class BackgroundService {
  constructor() { }
   getBackground = (type: string, name: string | number, subType?: string): string => {
    if (typeof name === 'number') {
      const result = Math.floor(Math.random() * name) + 1;
      if (subType) {
        return `/assets/img/backgrounds/${type}/${subType}/${result}.png`;
      } else {
        return `/assets/img/backgrounds/${type}/${result}.png`;
      }
    } else if (typeof name === 'string') {
      return `/assets/img/backgrounds/${type}/${name}.png`;
    } else {
      throw new Error('Argumento no válido. Debe ser un número o una cadena.');
    }
  };
}