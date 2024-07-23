import { useQuery } from "@tanstack/react-query";
import genre from "../data/genres";
import apiClient,{ FetchResponse } from "../services/api-client";

export interface Genre {
  name: string;
  id: number;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genre").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genre.length, results: genre },
  });

export default useGenres;
