import { Component, Input, OnInit } from '@angular/core';
import { BackgroundService } from 'src/app/common/services/background.service';

@Component({
  selector: 'app-skill-tree',
  templateUrl: './skill-tree.component.html',
  styleUrls: ['./skill-tree.component.scss']
})
export class SkillTreeComponent implements OnInit{
  
  @Input() className: string = '';
  bgImg = '';
  

  constructor (private backgroundService: BackgroundService) {}
  ngOnInit(): void {
    this.bgImg = this.backgroundService.getBackground('Classes', 1);
  }
}
