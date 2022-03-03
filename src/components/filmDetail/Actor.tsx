import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { getActor } from "../../apis/filmApi";
import { ORIGIN_PATH } from "../../constants";
interface Props {
  type: string;
  id: string;
}
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
        slidesToShow: 3,
        infinite: false,
        dots: false,
      },
    },
  ],
};
function Actor({ type, id }: Props) {
  const [listActor, setListActor] = useState<any>([]);
  useEffect(() => {
    getActor(type, id).then((res) => {
      if (res.status === 200) {
        setListActor(res?.data?.cast);
      
      }
    });
  }, [type, id]);
  return (
    <div className="w-full max-w-full md:w-[600px] mt-[10px] p-[20px] py-[0]  ">
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
