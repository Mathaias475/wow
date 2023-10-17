import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class BackgroundService {
  constructor() { }
  getRandomBackground = (type: string, maxRange: number): string => {
    const number = Math.random();
    const result = Math.floor(number * maxRange) + 1;
    return `/assets/img/backgrounds/${type}/${result}.png`;
  };
}