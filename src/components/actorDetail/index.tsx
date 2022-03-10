import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getDetailActor } from "../../apis/filmApi";
import { ORIGIN_PATH } from "../../constants";
import ListFilm from "../ListFilm";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../../common/Loading";

function ActorDetail() {
  const { id, name } = useParams();
  const [listMovie, setListMovie] = useState<any>([]);
  const [listTv, setListTv] = useState<any>([]);
  const [actor, setActor] = useState<any>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDetailActor(id!).then((res) => {
      setActor(res[0]?.data);
      setListMovie(res[1]?.data?.cast);
      setListTv(res[2]?.data?.cast);
      setLoading(false);
    });
  }, [id]);
  return !loading ? (
    <div className="px-[20px] md:px-[50px]">
      <div className="mb-[30px]">
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
      <div className="grid grid-cols-3 gap-3">
        <div className="md:col-span-1 col-span-3 flex justify-center items-center mb-[20px] md:justify-start">
          <img
            className=" max-w-full w-[300px] h-auto  object-cover"
            src={`${ORIGIN_PATH}${actor?.profile_path}`}
            alt=""
          />
        </div>
        <div className="col-span-3 md:col-span-2 text-secondTextColor">
          <p className="mb-[10px]">
            Họ và tên : <span className="text-indigo-500">{actor?.name}</span>
          </p>
          <p className="mb-[10px]">
            Ngày sinh :{" "}
            <span className="text-indigo-500">{actor?.birthday}</span>
          </p>
          <p className="mb-[10px]">
            Giới tính :{" "}
            <span className="text-indigo-500">
              {actor?.gender === 2 ? "Nam" : "Nữ"}
            </span>
          </p>
          <p className="mb-[10px]">
            Tiểu sử :{" "}
            <span className="text-indigo-500">{actor?.biography}</span>
          </p>
          <p className="mb-[10px]">
            Quê hương :{" "}
            <span className="text-indigo-500">{actor?.place_of_birth}</span>
          </p>
        </div>
      </div>
      <div className="mt-[30px]">
        {listMovie?.length > 0 && (
          <div>
            <h1 className="text-2xl text-indigo-500 font-semibold">
              Phim lẻ của {actor?.name}
            </h1>
            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-[20px]">
              <ListFilm listFilm={listMovie} />
            </div>
          </div>
        )}
      </div>
      <div className="mt-[30px]">
        {listMovie?.length > 0 && (
          <div>
            <h1 className="text-2xl text-indigo-500 font-semibold">
              Phim bộ của {actor?.name}
            </h1>
            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-[20px]">
              <ListFilm listFilm={listTv} />
            </div>
          </div>
        )}
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default ActorDetail;
