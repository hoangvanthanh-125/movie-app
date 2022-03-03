import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { getActor } from "../../apis/filmApi";
interface Props {
  type: string;
  id: string;
}
var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1057,
      settings: {
        slidesToShow: 5,
        infinite: false,
        dots: false,
        initialSlide: 2

      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 6,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 474,
      settings: {
        slidesToShow: 5,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 402,
      settings: {
        slidesToShow: 4,
        infinite: false,
        dots: false,
      },
    },
  ],
};
function Actor({ type, id }: Props) {
  const [listActor, setListActor] = useState<any>([]);
  useEffect(() => {
    window.scrollTo(0,0);
    getActor(type, id).then((res) => {
      if (res.status === 200) {
        setListActor(res?.data?.cast);
      
      }
    });
  }, [type, id]);
  return (
    <div className=" mt-[10px] p-[20px] py-[0]  ">
      <Slider {...settings} className="actor">
        {listActor?.length > 0 &&
          listActor?.map((item: any, index: number) => {
            if (item?.profile_path !== null) {
              return (
                <div className="text-secondTextColor actorItem" key={index}>
                  <img
                    className=" w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-cover rounded-[100px]"
                    src={`https://image.tmdb.org/t/p/w138_and_h175_face${item.profile_path!}`}
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

export default Actor;
