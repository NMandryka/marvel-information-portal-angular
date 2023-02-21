import { Component } from '@angular/core';
import {ComicsService} from "../../../core/services/comics.service";
import {Comic} from "../../../core/interfaces/comics/comic.interface";
import {take} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comic-page',
  templateUrl: './comic-page.component.html',
  styleUrls: ['./comic-page.component.scss']
})
export class ComicPageComponent {

  comic: Comic
  comicId: number
  loading = true

  constructor(private comicsService: ComicsService, private route: ActivatedRoute) {
    this.comicId = +this.route.snapshot.paramMap.get('id')!
    this.comicsService.getComic(this.comicId).pipe(take(1)).subscribe((comic: Comic) => {
      this.comic = comic
      this.loading = false
    })
  }

}
