import { NgModule } from '@angular/core';

import { WowComponent } from './wow.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { ItemsComponent } from './pages/items/items.component';
import { InfoComponent } from './pages/items/components/info/info.component';
import { BattlegroundsComponent } from './pages/battlegrounds/battlegrounds.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { DungeonsComponent } from './pages/dungeons/dungeons.component';
import { RaidsComponent } from './pages/raids/raids.component';
import { ProfessionsComponent } from './pages/professions/professions.component';
import { WowRoutingModule } from './wow-routing.module';
import { CommonModule } from '@angular/common';
import { DungeonInfoComponent } from './pages/dungeons/components/dungeon-info/dungeon-info.component';
import { BossComponent } from './pages/dungeons/components/boss/boss.component';
import { SkillTreeComponent } from './pages/characters/components/skill-tree/skill-tree.component';

@NgModule({
  imports: [SharedModule, WowRoutingModule, CommonModule],
  exports: [
    WowComponent,
    HomeComponent,
    ItemsComponent,
    InfoComponent,
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
    InfoComponent,
    BattlegroundsComponent,
    CharactersComponent,
    DungeonsComponent,
    RaidsComponent,
    ProfessionsComponent,
    DungeonInfoComponent,
    BossComponent,
    SkillTreeComponent,
  ],
  providers: [],
})
export class WowModule {}
