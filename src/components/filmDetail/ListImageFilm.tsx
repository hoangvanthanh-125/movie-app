import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axiosClient from "../../apis/axiosClient";
import { API_KEY } from "../../constants";

interface Props {
  type: string;
  id: string;
}

function ListImageFilm({ id, type }: Props) {
  const [listImage, setListImage] = useState<any>([]);
  const countImage = listImage?.length;
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 433,
        settings: {
          slidesToShow: countImage > 3 ? 3 : countImage,
          infinite: false,
          dots: false,
        },
      },
    ],
  };
  useEffect(() => {
    axiosClient.get(`/${type}/${id}/images?api_key=${API_KEY}`).then((res) => {
      if (res.status === 200) {
        setListImage(res?.data.backdrops);
      }
    });
  }, [id, type]);
  return (
    <div className="p-5">
      <Slider {...settings} className="">
        {listImage?.length > 0 &&
          listImage?.map((item: any, index: number) => {
            if (item?.file_path !== null) {
              return (
                <div className="text-secondTextColor actorItem" key={index}>
                  <img
                    className={`w-[${item?.width}px] h-[${item?.height}px]  object-cover`}
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
