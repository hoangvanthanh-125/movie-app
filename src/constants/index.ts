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
    listOption:["Tình cảm","Hành động","Phiêu lưu","Cổ trang","Hoạt hình"]

  },
  {
    name:"Quốc gia",
    dropdown:true,
    listOption:["Hàn Quốc","Việt Nam","Anh","Mĩ","Ấn Độ","Trung Quốc"]
  },
  {
    name:"Năm phát hành",
    dropdown:true,
    listOption:[2013,2014,2015,2016,2017,2018,2019,2020,2021,2022]
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