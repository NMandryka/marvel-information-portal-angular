import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Hero} from "../interfaces/heroes/hero.interface";
import {Enviroment} from "../../../enviroment/enviromets.prod";

@Injectable({providedIn: 'root'})
export class HeroesService {

  heroForCharInfo: BehaviorSubject<Hero | null>  = new BehaviorSubject<Hero | null>(null)
  constructor(private http: HttpClient) {
  }

  transformHeroResponse(hero: any): Hero {
    if(hero.description.length > 180) {
      hero.description = hero.description.slice(0, 180) + '...'
    }
    return {
      id: hero.id,
      name: hero.name,
      description: hero.description,
      thumbnail: hero.thumbnail.path + '.' + hero.thumbnail.extension,
      homepage: hero.urls[0].url,
      wiki: hero.urls[1].url,
      comics: hero.comics.items
    }
  }
  getRandomHero(): Observable<Hero> {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
    return this.http.get<Hero>(`${Enviroment.apiBase}characters/${id}?${Enviroment.apiKey}`)
      .pipe(map((response: any) => this.transformHeroResponse(response.data.results[0])))
  }
  getHeroes(offset: number = 210): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${Enviroment.apiBase}characters?limit=9&offset=${offset}&${Enviroment.apiKey}`)
      .pipe(map((response: any) => {
        return response.data.results.map(this.transformHeroResponse)
      }))
  }

  changeHeroForCharInfo(hero: Hero) {
    this.heroForCharInfo.next(hero)
  }

}
