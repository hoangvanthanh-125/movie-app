import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getHomeData } from "../../apis/filmApi";
import ListFilm from "../ListFilm";
import Carousel from "./Carousel";

function Home() {
  const [dataFilm, setDataFilm] = useState<any>([]);
  const [popularMovie, setPopularMovie] = useState([]);
  const [popularTv, setPopularTv] = useState([]);
  const [anime, setAnime] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getHomeData().then((res) => {
      setDataFilm(res[0].data.results);
      setPopularMovie(res[1]?.data?.results);
      setPopularTv(res[2]?.data?.results);
      setAnime(res[3]?.data?.results);
    });
  }, []);
  return (
    <div className="">
      <Carousel dataFilm={dataFilm} />
      <div>
        <div className="px-[20px] md:px-[50px] mt-[30px]">
          <div className="flex items-center justify-between">
            <h1 className="text-indigo-500 text-2xl font-semibold ">Phim lẻ</h1>
            <button
              className="p-[4px] rounded-sm mr-[5px] text-mainTextColor  font-semibold text-[13px] border border-indigo-400 bg-indigo-500 hover:bg-indigo-700 transition-all"
              type="submit"
              onClick={() => navigate("/list/movie")}
            >
              Xem thêm
            </button>{" "}
          </div>
          <ListFilm listFilm={popularMovie.slice(0, 12)} />
        </div>
        <div className="px-[20px] md:px-[50px] mt-[30px]">
          <div className="flex items-center justify-between">
            <h1 className="text-indigo-500 text-2xl font-semibold">Phim bộ</h1>
            <button
              className="p-[4px] rounded-sm mr-[5px] text-mainTextColor  font-semibold text-[13px] border border-indigo-400 bg-indigo-500 hover:bg-indigo-700 transition-all"
              type="submit"
              onClick={() => navigate("/list/tv")}
            >
              Xem thêm
            </button>{" "}
          </div>
          <ListFilm listFilm={popularTv.slice(0, 12)} />
        </div>
        <div className="px-[20px] md:px-[50px] mt-[30px]">
          <div className="flex items-center justify-between">
            <h1 className="text-indigo-500 text-2xl font-semibold ">
              Phim hoạt hình
            </h1>
            <button
              className="p-[4px] rounded-sm mr-[5px] text-mainTextColor  font-semibold text-[13px] border border-indigo-400 bg-indigo-500 hover:bg-indigo-700 transition-all"
              type="submit"
              onClick={() => navigate("/genre/16")}
            >
              Xem thêm
            </button>{" "}
          </div>
          <ListFilm listFilm={anime.slice(0, 12)} />
        </div>
      </div>
    </div>
  );
}

export default Home;
