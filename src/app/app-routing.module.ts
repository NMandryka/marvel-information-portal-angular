import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorMessageComponent} from "./shared/components/error-message/error-message.component";

const routes: Routes = [
  {path: '', redirectTo: 'heroes', pathMatch: 'full'},
  {path: 'heroes', loadChildren: () => import('./pages/heroes/heroes.module').then(m => m.HeroesModule)},
  {path: 'comics', loadChildren: () => import('./pages/comics/comics.module').then(m => m.ComicsModule)},
  {path: '**', component: ErrorMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
