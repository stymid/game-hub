import { useQuery } from "@tanstack/react-query";
// import genre from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";
import genres from "../data/genres";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  name: string;
  id: number;
  image_background: string;
}

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 5 * 1000,
    initialData: genres,
  });

export default useGenres;
