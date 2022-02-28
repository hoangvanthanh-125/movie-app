import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { fetchDataHome } from "../../redux/actions/filmDataActions";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import ListFilm from "../ListFilm";
import Carousel from "./Carousel";
import ListFilmInHome from "./ListFilmInHome";

function Home() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { filmOnCarousel, popularMovie, popularTv, anime,movieTrending,tvTrending } = useAppSelector(
    (state) => state.filmData
  );
  console.log(filmOnCarousel);

  useEffect(() => {
    dispatch(fetchDataHome());
  }, []);
  return (
    <div className="">
      <Carousel filmOnCarousel={filmOnCarousel} />
      <div className="">
        <ListFilmInHome
          listFilm={popularMovie}
          listTrending={movieTrending}
          path="/list/movie"
          title="Phim lẻ"
        />
        <ListFilmInHome
          listFilm={popularTv}
          listTrending={tvTrending}
          path="/list/tv"
          title="Phim bộ"
        />

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
          <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-[20px]">
            <ListFilm listFilm={anime.slice(0, 12)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
