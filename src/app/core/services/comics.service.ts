import {Injectable, OnDestroy} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable, ReplaySubject} from "rxjs";
import {Enviroment} from "../../../enviroment/enviromets.prod";
import {Comic} from "../interfaces/comics/comic.interface";

@Injectable({providedIn: 'root'})
export class ComicsService {
  constructor(private http: HttpClient) {
  }

  transformComicResponse(comic: any) {
    if(comic.description?.length > 180) {
      comic.description = comic.description.slice(0, 180) + '...'
    }
    return {
      id: comic.id,
      title: comic.title,
      description: comic.description || 'There is no description',
      pageCount: comic.pageCount || 'No information about the number of pages',
      thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
      language: comic.textObjects.language || 'en-us',
      price: comic.prices[0].price || 'not available'
    }
  }
  getComics(offset = 0): Observable<Comic[]> {
    return this.http.get<Comic[]>(`${Enviroment.apiBase}/comics?orderBy=issueNumber&limit=8&offset=${offset}&${Enviroment.apiKey}`)
      .pipe(map((response: any) => {
        return response.data.results.map(this.transformComicResponse)
      }))
  }

  getComic(id: number): Observable<Comic> {
    return this.http.get<Comic>(`${Enviroment.apiBase}comics/${id}?${Enviroment.apiKey}`)
      .pipe(map((response: any) => this.transformComicResponse(response.data.results[0])))
  }

}
