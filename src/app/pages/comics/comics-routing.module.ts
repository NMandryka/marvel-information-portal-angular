import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComicsPageComponent} from "./comics-page/comics-page.component";
import {ComicPageComponent} from "./comic-page/comic-page.component";

const routes: Routes = [
  {path: '', component: ComicsPageComponent},
  {path: ':id', component: ComicPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule { }
