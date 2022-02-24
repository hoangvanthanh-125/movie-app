 interface Data{
   id:string | number,
   name:string
 }
 const countryData:Data[] = [
  {
    id: "en",
    name: "Âu mỹ",
  },
  {
    id: "ko",
    name: "Hàn Quốc",
  },
  {
    id: "fr",
    name: "Pháp",
  },
  {
    id: "",
    name: "Canada",
  },
  {
    id: "ja",
    name: "Nhật bản",
  },
  {
    id: "cn",
    name: "Trung quốc",
  },
  {
    id: "hi",
    name: "Ấn độ",
  },
  {
    id: "th",
    name: "Thái lan",
  },
  {
    id: "en",
    name: "Úc",
  },
  {
    id: "vi",
    name: "Việt Nam",
  },
  {
    id: "de",
    name: "Đức",
  },
  {
    id: "ru",
    name: "Nga",
  },
  {
    id: "fi",
    name: "Phần Lan",
  },
  {
    id: "es",
    name: "Tây Ban Nha",
  },
  {
    id: "ms",
    name: "Malaysia",
  },
  {
    id: "id",
    name: "Indonesia",
  },
  {
    id: "tl",
    name: "Philipines",
  },
  {
    id: "pt",
    name: "Brazin",
  },
  {
    id: "es",
    name: "Mexico",
  },
];
let listYear : Data[] = [];
const date = new Date();
  const getCurrentYear = date.getFullYear();
  for (let i = 1990; i < getCurrentYear; ++i) {
    listYear.unshift({
      id:i,
      name:i.toString()
    });
  }
const geners = [
  {
  id:  28 ,
   name:  " Hành động "
  } ,
  {
   id :  12 ,
   name :  " Phiêu lưu "
  } ,
  {
  id:  16 ,
  name:  " Hoạt ảnh "
  } ,
  {
  id:  35 ,
  name:  " Hài kịch "
  } ,
  {
   id:  80 ,
  name:  " Tội phạm "
  } ,
  {
  id:  99 ,
  name:  " Phim tài liệu "
  } ,
  {
  id:  10751 ,
  name:  " Gia đình "
  } ,
  {
  id:  14 ,
  name:  " Ảo tưởng "
  } ,
  {
  id:  36 ,
  name:  " Lịch sử "
  } ,
  {
  id:  27 ,
  name:  " Kinh dị "
  } ,
  {
   id :  10402 ,
   name :  " Âm nhạc "
  } ,
  {
   id :  9648 ,
   name :  " Bí ẩn "
  } ,
  {
   id :  10749 ,
   name :  " Tình cảm "
  } ,
  {
   id :  878 ,
   name :  " Khoa học viễn tưởng "
  } ,
  {
   id :  10770 ,
   name :  " Phim truyền hình "
  } ,
  {
   id :  53 ,
   name :  " Phim kinh dị "
  } ,
  {
   id :  10752 ,
   name :  " Chiến tranh "
  } ,
  {
   id :  37 ,
   name :  " Tây "
  }
  ]
  export {
    countryData,
    listYear,
    geners
  };