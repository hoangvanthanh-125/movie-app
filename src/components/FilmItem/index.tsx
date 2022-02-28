import React from "react";
import 'react-rater/lib/react-rater.css';
import { ORIGIN_PATH } from "../../constants";
function FilmItem({ film }: any) {
  return (
    <div className="w-[2/5] mb-[15px] cursor-pointer md:hover:scale-110 transition-all group delay-500 md:w-[1/6]  ">
      <img
        className="w-full  h-[270px] object-cover rounded-sm"
        src={`${ORIGIN_PATH}${film.poster_path}`}
        alt=""
      />

      <p className="max-w-full w-full  max-h-[20px] overflow-hidden  transition-all group delay-500 mt-[3px] group-hover:text-indigo-700 text-indigo-500 mb-[3px]">
        {film?.name || film?.title}
      </p>
      <p className="overflow-hidden h-[15px] text-[13px] text-mainTextColor">
        {film?.original_title || film?.original_name}
      </p>
    </div>
  );
}

export default FilmItem;
