import React from "react";
import Slider from "react-slick";

interface Props {
  type: string;
  id: string,
  listImage:any
}

function ListImageFilm({ id, type,listImage }: Props) {
  const countImage = listImage?.length;
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: countImage > 3 ? 3: countImage,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: countImage > 2 ? 2: countImage,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 794,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: countImage > 3 ? 3: countImage,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 707,
        settings: {
          slidesToShow: countImage > 2 ? 2: countImage,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 503,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="p-5">
      <Slider {...settings} >
        {listImage?.length > 0 &&
          listImage?.map((item: any, index: number) => {
            if (item?.file_path !== null) {
              return (
                <div className="text-secondTextColor actorItem" key={index}>
                  <img
                    className={`w-[200px] h-[150px]  object-cover`}
                    src={`https://image.tmdb.org/t/p/w138_and_h175_face${item.file_path!}`}
                    alt=""
                  /> 
                  <p className="text-[12px] mt-[5px] ">{item?.name}</p>
                </div>
              );
            }
          })}
      </Slider>
    </div>
  );
}

export default ListImageFilm;
