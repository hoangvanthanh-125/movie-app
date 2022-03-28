import React from "react";
import "react-rater/lib/react-rater.css";
import { useNavigate } from "react-router";
import { ORIGIN_PATH } from "../../constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
interface Props {
  film: any;
  isTrending?: boolean;
}
function FilmItem({ film, isTrending }: Props) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(
          `/${film?.name ? "tv" : "movie"}/${film?.id}/${
            film?.name || film?.title
          }`
        )
      }
      className={` mb-[15px] cursor-pointer md:hover:scale-110 transition-all group delay-1000 ${
        isTrending === true ? "flex" : ""
      }`}
    >
      <LazyLoadImage
        className={`${
          isTrending === true
            ? "w-[60px] h-auto mr-[20px]"
            : "w-full h-[270px] "
        }  object-cover rounded-sm`}
        src={`${ORIGIN_PATH}${film.poster_path}`}
        alt=""
        effect="blur"
      />

      <div>
        <p className="max-w-full w-full  max-h-[20px] overflow-hidden  transition-all group delay-500 mt-[3px] group-hover:text-indigo-700 text-indigo-500 mb-[3px]">
          {film?.name || film?.title}
        </p>
        <p className="overflow-hidden h-[15px] text-[13px] text-mainTextColor">
          {film?.original_title || film?.original_name}
        </p>
      </div>
    </div>
  );
}

export default FilmItem;
