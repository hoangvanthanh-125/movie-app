import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Slider from "react-slick";
interface Props {
  type: string;
  id: string,
  listActor:any
}

function Actor({ type, id,listActor }: Props) {
  const lengthActor = listActor?.length;
  const navigate = useNavigate();
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: lengthActor > 6 ? 6 : lengthActor,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1057,
        settings: {
          slidesToShow: lengthActor > 5 ? 5 : lengthActor,
          infinite: false,
          dots: false,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: lengthActor > 6 ? 6 : lengthActor,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 474,
        settings: {
          slidesToShow: lengthActor > 5 ? 5 : lengthActor,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 402,
        settings: {
          slidesToShow: lengthActor > 4 ? 4 : lengthActor,
          infinite: false,
          dots: false,
        },
      },
    ],
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type, id]);
  return (
    <div className=" mt-[10px] p-[20px] py-[0]  ">
      <Slider {...settings} className="actor">
        {listActor?.length > 0 &&
          listActor?.map((item: any, index: number) => {
            if (item?.profile_path !== null) {
              return (
                <div className="text-secondTextColor actorItem hover:scale-110 transition-all cursor-pointer" key={index} onClick={() => navigate(`/actor/${item?.id}/${item?.name?.replaceAll(' ','-')}`)}>
                  <img
                    className=" w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-cover rounded-[100px]"
                    src={`https://image.tmdb.org/t/p/w138_and_h175_face${item.profile_path!}`}
                    alt=""
                  />
                  <p className="text-[12px] mt-[5px] break-all text-center">{item?.name}</p>
                </div>
              );
            }
          })}
      </Slider>
    </div>
  );
}

export default Actor;
