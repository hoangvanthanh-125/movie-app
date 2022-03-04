import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getTrailer } from "../../apis/filmApi";
import FilmDetail from "../filmDetail";

function WatchPage() {
  const { id, type, name } = useParams();
  const [key, setKey] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    getTrailer(type!, id!).then((res) => {
      setKey(res.data.results[0]?.key);
    });
  }, [type, id]);
  return (
    <div className="">
      <div className="px-[20px] md:px-[50px]">
      <div className="w-full h-[30px] bg-gray-700 text-mainTextColor flex items-center justify-start  mt-[30px] py-[20px] ">
          <div
            onClick={() => navigate("/")}
            className="ml-[10px] hover:text-indigo-500 cursor-pointer transition-all"
          >
            <FontAwesomeIcon icon={faHome} className="text-[14px]" />
            <span className="ml-[5px]">Trang chủ</span>
          </div>
          <span className="mx-[5px]">/</span>
          <span>{name?.replaceAll("-", " ")}</span>
        </div>
      </div>
      <div className="mt-[30px] px-[20px] md:px-[50px]">
        <iframe
          className="w-full
  "
          title="video"
          height="430"
          src={`https://www.youtube.com/embed/${key}?autoplay=1`}
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </div>
      <div>
        <FilmDetail atWatchPage={true} />
      </div>
    </div>
  );
}

export default WatchPage;
