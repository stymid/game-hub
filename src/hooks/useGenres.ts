import { useQuery } from "@tanstack/react-query";
import genre from "../data/genres";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/Genres");

export interface Genre {
  name: string;
  id: number;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genre.length, results: genre },
  });

export default useGenres;
