import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

function Carousel() {
  const [dataFilm, setDataFilm] = useState<any>([1]);
  console.log(dataFilm);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=0ef54b8f9731f4b0b783ef7276c3800f&language=vi&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=1"
      )
      .then((res) => setDataFilm(res.data.results));
  }, []);
  return (
    <div className="px-[0px] bg-mainBackGround  ">
      <Slider {...settings}>
        {dataFilm.map((item: any, index: number) => (
          <div
            className="relative before:absolute before:inset-0 before:bg-overlayColor "
            key={index}
          >
            <img
              className="w-full  h-auto"
              alt=""
              src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path!}`}
            />
            <div className="absolute  top-[50px] left-[50px] text-[14px] text-mainTextColor font-bold md:text-[36px] md:top-[150px] md:left-[150px]">
              <h1>{item.original_title}</h1>
              <h2 className="text-[12px] md:text-[27px] bg-gradient-to-r from-indigo-500 py-[10px] pl-[10px] pr-[100px] ">{item.title}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;