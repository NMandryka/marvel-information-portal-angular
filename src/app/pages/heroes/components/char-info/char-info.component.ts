import {Component, OnDestroy} from '@angular/core';
import {HeroesService} from "../../../../core/services/heroes.service";
import {Hero} from "../../../../core/interfaces/heroes/hero.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-char-info',
  templateUrl: './char-info.component.html',
  styleUrls: ['./char-info.component.scss']
})
export class CharInfoComponent implements OnDestroy{

  sub: Subscription
  hero: Hero | null
  constructor(private heroesService: HeroesService) {
    this.sub = this.heroesService.heroForCharInfo.subscribe(hero => {
      this.hero = hero
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
