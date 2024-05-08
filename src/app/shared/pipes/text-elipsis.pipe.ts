import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textElipsis'
})

export class TextElipsisPipeComponent implements PipeTransform {
  transform(value: string): string {
    if(value.length > 50) {
      return value.slice(0,50) + '...';
    } else return value;
  }
}