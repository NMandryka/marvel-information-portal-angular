import {Component, OnDestroy} from '@angular/core';
import {HeroesService} from "../../../../core/services/heroes.service";
import {Hero} from "../../../../core/interfaces/heroes/hero.interface";
import {catchError, ReplaySubject, takeUntil} from "rxjs";

@Component({
  selector: 'app-random-char',
  templateUrl: './random-char.component.html',
  styleUrls: ['./random-char.component.scss']
})
export class RandomCharComponent implements OnDestroy{

  private destroySub$ = new ReplaySubject<void>(1)

  hero: Hero
  loading: boolean
  constructor(private heroesService: HeroesService) {
    this.updateHero()
  }
  updateHero() {
    this.loading = true
    this.heroesService.getRandomHero().pipe(takeUntil(this.destroySub$)).subscribe((hero) => {
      this.hero = hero
      this.loading = false
    }, (error) => {
      catchError(error)
    })
  }

  ngOnDestroy() {
    this.destroySub$.next()
    this.destroySub$.complete()
  }

}
