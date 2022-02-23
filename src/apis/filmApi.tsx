import { API_KEY } from "../constants";
import axiosClient from "./axiosClient";
interface Filter {
  genre: string;
  page: string | number;
  year: string | number;
  country: string;
  sortBy: string;
}

export const getListFilm = (
  { genre, page, year, country, sortBy }: Filter,
  type: string
) =>
  axiosClient.get(
    `/discover/${type}?api_key=${API_KEY}&language=vi&with_genres=${genre}&page=${page}&primary_release_year=${year}&with_original_language=${country}&sort_by=${sortBy}`
  );
