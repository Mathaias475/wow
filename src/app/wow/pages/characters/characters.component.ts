import { Component, OnInit } from "@angular/core";
import { Characters } from "../../interfaces/characters.interface";
import { DataService } from "src/app/common/services/data.service";
import { BackgroundService } from "src/app/common/services/background.service";
import { getColorClassByName } from "src/app/common/util/utils";
@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"],
})
export class CharactersComponent implements OnInit {
  characters: Characters[] = [];
  bgImg = "";
  isSelected = false;
  selectedCharacter: Characters = {
    className: "",
    classIcon: "",
    specializations: [{name: '', icon: ''}]
  };
  showCharacters = false;

  constructor(
    private dataService: DataService,
    private backgroundService: BackgroundService
  ) {}

  async searchCharacter(name: string) {
    const response = await this.dataService.getData(name, "Characters");
    this.characters = response ? response : [];
  }

  ngOnInit(): void {
    this.bgImg = this.backgroundService.getBackground("characters", 3);
    this.searchCharacter("");
    setTimeout(() =>{
      this.showCharacters = true;
    }, 100);
  }
  getColorClass(name: string) {
    return getColorClassByName(name);
  }
  selectCharacter(character: Characters) {
    this.selectedCharacter = character;
    this.bgImg = this.backgroundService.getBackground('characters', 2, character.className);
    this.isSelected = true;
    
  }
  goBack() {
    this.selectedCharacter = {
      className: '',
      classIcon: "",
      specializations: [{name: '', icon: ''}]
    };
    this.isSelected = false;
    this.bgImg = this.backgroundService.getBackground("characters", 3);
    this.searchCharacter('')
  }
}
