import { countryData, DataFilter, genres, listYear } from "../components/data/filterData";

export const API_KEY = '0ef54b8f9731f4b0b783ef7276c3800f';
export const ORIGIN_PATH = 'https://image.tmdb.org/t/p/w500'
export interface HeaderItem {
  name:string,
  dropdown:boolean,
  listOption?:DataFilter[],
  path?:string
}
export const listHeader:HeaderItem[] = [
  {
    name:"Phim lẻ",
    dropdown:false,
    path:'/list/movie'
  },
  {
    name:"Phim bộ",
    dropdown:false,
    path:'/list/tv'
  },
  {
    name:"Thể loại",
    dropdown:true,
    listOption:genres
  },
  {
    name:"Quốc gia",
    dropdown:true,
    listOption:countryData
  },
  {
    name:"Năm phát hành",
    dropdown:true,
    listOption:listYear
  },
  // {
  //   name:"Phim chiếu rạp",
  //   dropdown:false
  // },
  {
    name:"Trailer",
    dropdown:false
  }
]