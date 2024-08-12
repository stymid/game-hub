import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./publisher";

export default interface Game {
  id: number;
  name: string;
  genres: Genre[];
  publishers: Publisher[];
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  description_raw: string;
}
