import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "6dab9fb8d18642e6997d59a75dbc9ffb" },
});
