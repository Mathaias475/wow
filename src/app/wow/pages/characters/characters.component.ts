import { Component, OnInit } from '@angular/core';
import { Characters } from '../../interfaces/characters.interface';
import { DataService } from 'src/app/common/services/data.service';
import { BackgroundService } from 'src/app/common/services/background.service';
import { getColorClassByName } from 'src/app/common/util/utils';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit{
  
  characters: Characters[] = [];

  constructor(private dataService: DataService, private backgroundService: BackgroundService) {}
  bgImg = '';
  ngOnInit(): void {
    this.bgImg = this.backgroundService.getBackground('characters', 3);
    this.searchCharacter('');
    
  }
  
  async searchCharacter(name: string) {
    const response = await this.dataService.getData(name, "Characters");
    this.characters = response ? response : [];
    console.log(this.characters);
    }

    getColorClass(name: string) {
      return getColorClassByName(name);
    }
}
