import { Component, OnInit } from '@angular/core';
import { WoWRoutes } from '../../wow.routes';
import { Router } from '@angular/router';
import { BackgroundService } from 'src/app/common/services/background.service';

@Component({
  selector: 'app-battlegrounds',
  templateUrl: './battlegrounds.component.html',
  styleUrls: ['./battlegrounds.component.scss']
})
export class BattlegroundsComponent implements OnInit {

  bgImg = this.backgroundService.getBackground(this.router.url, 1);
  routes = WoWRoutes.ROUTES;
  constructor(private router: Router, private backgroundService: BackgroundService) { }
  ngOnInit(): void {

  }
  
}
