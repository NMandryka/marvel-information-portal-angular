import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroesRoutingModule} from "./heroes-routing.module";
import {HeroesPageComponent} from "./heroes-page/heroes-page.component";
import { RandomCharComponent } from './components/random-char/random-char.component';
import { CharListComponent } from './components/char-list/char-list.component';
import { CharInfoComponent } from './components/char-info/char-info.component';



@NgModule({
  declarations: [
    HeroesPageComponent,
    RandomCharComponent,
    CharListComponent,
    CharInfoComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
