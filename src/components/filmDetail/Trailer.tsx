import React, { useState } from "react";
import Slider from "react-slick";
import { useAppDispatch } from "../../redux/hook";
import { uiActions } from "../../redux/slice/uiSlice";
import VideoTrailer from "./VideoTrailer";
interface Props {
  type: string;
  id: string,
  listTrailer:any
}

function Trailer({ type, id,listTrailer }: Props) {
  
  const [videoKey, setVideokey] = useState("");
  const videoCount = listTrailer?.length;

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: videoCount > 3 ? 3: videoCount,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: videoCount > 2 ? 2: videoCount,
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
          slidesToShow: videoCount > 3 ? 3: videoCount,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 707,
        settings: {
          slidesToShow: videoCount > 2 ? 2: videoCount,
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
  const dispatch = useAppDispatch();
  
  const closeVideo = () => {
    setVideokey("");
  };
  const handleClickVideo = (item: any) => {
    setVideokey(item?.key);
    dispatch(uiActions.openOverlay());
  };
  return (
    <div className=" mt-[10px] p-[20px] py-[0]  ">
      <Slider {...settings} className="actor">
        {listTrailer?.length > 0 &&
          listTrailer?.map((item: any, index: number) => {
            if (item?.profile_path !== null) {
              return (
                <div
                  onClick={() => handleClickVideo(item)}
                  className="text-secondTextColor actorItem relative cursor-pointer group hover:scale-105 transition-all"
                  key={index}
                >
                  <svg
                    fill="#fff"
                    className="w-[30px] h-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                  </svg>
                  <img
                    className={`w-[200px] h-[150px]  object-cover`}
                    src={`https://img.youtube.com/vi/${item?.key}/mqdefault.jpg`}
                    alt=""
                  />
                  <p className="text-[12px] mt-[5px] ">{item?.name}</p>
                </div>
              );
            }
          })}
      </Slider>
      {videoKey && <VideoTrailer closeVideo={closeVideo} videoKey={videoKey} />}
    </div>
  );
}

export default Trailer;
