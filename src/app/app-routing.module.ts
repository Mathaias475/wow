import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WoWRoutes } from './wow/wow.routes';
import { HomeComponent } from './wow/pages/home/home.component';
import { ItemsComponent } from './wow/pages/items/items.component';

const routes: Routes = [
  {
  path: '',
  loadChildren: () => import('./wow/wow.module').then(m => m.WowModule)
},
{
  path: 'home',
  component: HomeComponent,
},
{
  path: 'items',
  component: ItemsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
