// import UseData from "./useData";

// export interface Genre {
//   name: string;
//   id: number;
//   image_background: string;
// }

// const useGenres = () => UseData<Genre>("/genres");

// export default useGenres;

import genre from "../data/genres";
export interface Genre {
  name: string;
  id: number;
  image_background: string;
}

const useGenres = () => ({ data: genre, error: null, isLoading: false });
export default useGenres;
