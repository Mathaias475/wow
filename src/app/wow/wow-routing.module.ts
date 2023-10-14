import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WowComponent } from './wow.component';
import { WoWRoutes } from './wow.routes';
import { HomeComponent } from './pages/home/home.component';
import { DungeonsComponent } from './pages/dungeons/dungeons.component';
import { RaidsComponent } from './pages/raids/raids.component';
import { BattlegroundsComponent } from './pages/battlegrounds/battlegrounds.component';
import { ItemsComponent } from './pages/items/items.component';
import { ProfessionsComponent } from './pages/professions/professions.component';
import { CharactersComponent } from './pages/characters/characters.component';

const routes: Routes = [
  {
    path: '',
    component: WowComponent,
    children: [
      {
        path: WoWRoutes.ROUTES.Home.path,
        component: HomeComponent,
      },
      {
        path: WoWRoutes.ROUTES.Dungeons.path,
        component: DungeonsComponent,
      },
      {
        path: WoWRoutes.ROUTES.Raids.path,
        component: RaidsComponent
      },
      {
        path: WoWRoutes.ROUTES.Battlegrounds.path,
        component: BattlegroundsComponent,
      },
      {
        path: WoWRoutes.ROUTES.Items.path,
        component: ItemsComponent,
      },
      {
        path: WoWRoutes.ROUTES.Professions.path,
        component: ProfessionsComponent,
      },
      {
        path: WoWRoutes.ROUTES.Characters.path,
        component: CharactersComponent,
      }
      // ....
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WowRoutingModule {}
