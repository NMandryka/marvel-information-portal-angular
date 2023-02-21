import {Component, OnDestroy} from '@angular/core';
import {HeroesService} from "../../../../core/services/heroes.service";
import {Hero} from "../../../../core/interfaces/heroes/hero.interface";

import {catchError, ReplaySubject, take, takeUntil} from "rxjs";

@Component({
  selector: 'app-char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.scss']
})
export class CharListComponent implements OnDestroy{

  private destroySub$ = new ReplaySubject<void>(1)
  offset = 210
  onInitLoading = true
  loading = false
  heroesList: Hero[]
  constructor(public heroesService: HeroesService) {
    this.heroesService.getHeroes().pipe(take(1)).subscribe((heroesList) => {
      this.heroesList = heroesList
      this.onInitLoading = false
    }, (error) => {
      catchError(error)
    })
  }

  loadMore() {
    this.loading = true
    this.offset += 9
    this.heroesService.getHeroes(this.offset).pipe(takeUntil(this.destroySub$)).subscribe((heroesList) => {
      this.heroesList.push(...heroesList)
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
