import {Comic} from "../comics/comic.interface";

export interface Hero {
  id: string,
  name: string,
  description: string,
  thumbnail: string,
  homepage: string,
  wiki: string,
  comics: any
}
