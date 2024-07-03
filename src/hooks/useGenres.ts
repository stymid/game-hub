import UseData from "./useData";

export interface Genre {
  name: string;
  id: number;
}

const useGenres = () => UseData<Genre>("/genres");

export default useGenres;
