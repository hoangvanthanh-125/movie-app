import { countryData, geners, listYear } from "../components/data/filterData";

export const API_KEY = '0ef54b8f9731f4b0b783ef7276c3800f';
export const ORIGIN_PATH = 'https://image.tmdb.org/t/p/w500'
export const listHeader = [
  {
    name:"Phim lẻ",
    dropdown:false
  },
  {
    name:"Phim bộ",
    dropdown:false
  },
  {
    name:"Thể loại",
    dropdown:true,
    listOption:geners
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
  {
    name:"Phim chiếu rạp",
    dropdown:false
  },
  {
    name:"Trailer",
    dropdown:false
  }
]