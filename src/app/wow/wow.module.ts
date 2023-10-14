import { NgModule } from '@angular/core';

import { WowComponent } from './wow.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { ItemsComponent } from './pages/items/items.component';
import { BattlegroundsComponent } from './pages/battlegrounds/battlegrounds.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { DungeonsComponent } from './pages/dungeons/dungeons.component';
import { RaidsComponent } from './pages/raids/raids.component';
import { ProfessionsComponent } from './pages/professions/professions.component';
import { WowRoutingModule } from './wow-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [SharedModule, WowRoutingModule, CommonModule],
  exports: [
    WowComponent,
    HomeComponent,
    ItemsComponent,
    BattlegroundsComponent,
    CharactersComponent,
    DungeonsComponent,
    RaidsComponent,
    ProfessionsComponent,
  ],
  declarations: [
    WowComponent,
    HomeComponent,
    ItemsComponent,
    BattlegroundsComponent,
    CharactersComponent,
    DungeonsComponent,
    RaidsComponent,
    ProfessionsComponent,
  ],
  providers: [],
})
export class WowModule {}
