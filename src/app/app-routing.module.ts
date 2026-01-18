import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WoWRoutes } from './wow/wow.routes';

const routes: Routes = [
  {
  path: '',
  loadChildren: () => import('./wow/wow.module').then(m => m.WowModule)
},
{
  path: '**',
  redirectTo: WoWRoutes.ROUTES.Home.path,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
