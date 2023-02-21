import {Component, OnDestroy} from '@angular/core';
import {ComicsService} from "../../../core/services/comics.service";
import {Comic} from "../../../core/interfaces/comics/comic.interface";
import {Router} from "@angular/router";
import {ReplaySubject, takeUntil} from "rxjs";

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.scss']
})
export class ComicsListComponent implements OnDestroy{

  private destroySub$ = new ReplaySubject<void>(1)

  comics: Comic[]
  offset = 0
  constructor(private comicsService: ComicsService, private router: Router) {
    this.comicsService.getComics().pipe(takeUntil(this.destroySub$)).subscribe((comics: Comic[]) => {
      this.comics = comics
    })
  }

  loadMoreComics() {
    this.offset += 8
    this.comicsService.getComics(this.offset).pipe(takeUntil(this.destroySub$)).subscribe((comics: Comic[]) => {
      this.comics.push(...comics)
    })
  }

  comicInformation(id: number) {
    this.router.navigate(['/comics', id])
  }

  ngOnDestroy() {
    this.destroySub$.next()
    this.destroySub$.complete()
  }
}
