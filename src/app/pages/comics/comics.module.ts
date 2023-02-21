import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComicsRoutingModule} from "./comics-routing.module";
import {ComicsPageComponent} from "./comics-page/comics-page.component";
import { ComicPageComponent } from './comic-page/comic-page.component';
import { ComicsListComponent } from './comics-list/comics-list.component';



@NgModule({
  declarations: [ComicsPageComponent, ComicPageComponent, ComicsListComponent],
  imports: [
    CommonModule,
    ComicsRoutingModule
  ]
})
export class ComicsModule { }
