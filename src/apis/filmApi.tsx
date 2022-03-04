import axios from "axios";
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
  type: string,
  option: string
) => {
  if (option === "list") {
    return axiosClient.get(
      `/discover/${type}?api_key=${API_KEY}&language=vi&with_genres=${genre}&page=${page}&primary_release_year=${year}&with_original_language=${country}&sort_by=${sortBy}`
    );
  } else if (option === "genre") {
    return axiosClient.get(
      `/discover/movie?api_key=${API_KEY}&language=vi&with_genres=${type}&page=${page}&primary_release_year=${year}&with_original_language=${country}&sort_by=${sortBy}`
    );
  } else if (option === "country") {
    return axiosClient.get(
      `/discover/movie?api_key=${API_KEY}&language=vi&with_genres=${genre}&page=${page}&primary_release_year=${year}&with_original_language=${type}&sort_by=${sortBy}`
    );
  } else if (option === "year") {
    return axiosClient.get(
      `/discover/movie?api_key=${API_KEY}&language=vi&with_genres=${genre}&page=${page}&primary_release_year=${type}&with_original_language=${country}&sort_by=${sortBy}`
    );
  }
};
export const getHomeData = () =>
  Promise.all([
    axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=0ef54b8f9731f4b0b783ef7276c3800f&language=vi"
    ),
    axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=0ef54b8f9731f4b0b783ef7276c3800f&language=vi&page=1"
    ),
    axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=0ef54b8f9731f4b0b783ef7276c3800f&language=vi&page=1"
    ),
    axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=0ef54b8f9731f4b0b783ef7276c3800f&language=vi&with_genres=16&page=1"
    ),
    axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=0ef54b8f9731f4b0b783ef7276c3800f"),
    axios.get("https://api.themoviedb.org/3/trending/tv/day?api_key=0ef54b8f9731f4b0b783ef7276c3800f")
  ]);

  export const fetchListSearch = (query:string,page:number) => axiosClient.get(`search/multi?api_key=${API_KEY}&language=vi&page=${page}&include_adult=false&query=${query}`)

  export const fetchFilmDetail = (type:string,id:string) => axiosClient.get(`/${type}/${id}?api_key=${API_KEY}&language=vi`);

  export const getActor = (type:string,id:string) => axiosClient.get(`/${type}/${id}/credits?api_key=${API_KEY}&language=vi`);
  export const getListKeyWord = (type:string,id:string) =>  axiosClient.get(`/${type}/${id}/keywords?api_key=${API_KEY}`)

  export const getTrailer = (type:string,id:string) => axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY}`);
 export const getListImage = (type:string,id:string) => axiosClient.get(`/${type}/${id}/images?api_key=${API_KEY}`)
  export const getDetailFilmData = (type:string,id:string) =>  Promise.all([
    fetchFilmDetail(type,id),
    getActor(type,id),
    getListImage(type,id),
    getTrailer(type,id),
    getListKeyWord(type,id)
  ])

export const getDetailActor = (id:string) => Promise.all([
  axiosClient.get(`/person/${id}?api_key=${API_KEY}&languagevi`),
  axiosClient.get(`/person/${id}/movie_credits?api_key=${API_KEY}&languagevi`),
  axiosClient.get(`/person/${id}/tv_credits?api_key=${API_KEY}&languagevi`)
])