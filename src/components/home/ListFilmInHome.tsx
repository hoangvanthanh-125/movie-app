import React from "react";
import { useNavigate } from "react-router";
import ListFilm from "../ListFilm";
interface Props {
  listFilm: any;
  listTrending: any;
  path: string;
  title: string;
}
function ListFilmInHome({ listFilm, listTrending, path, title }: Props) {
  const navigate = useNavigate();
  return (
    <div className="px-[20px] md:px-[50px] mt-[30px]">
      <div className="grid grid-cols-12 gap-6">
        <div className=" col-span-12 md:col-span-8 ">
          <div className="flex items-center justify-between">
            <h1 className="text-indigo-500 text-2xl font-semibold  ">
              {title}
            </h1>
            <button
              className="p-[4px] rounded-sm mr-[5px] text-mainTextColor  font-semibold text-[13px] border border-indigo-400 bg-indigo-500 hover:bg-indigo-700 transition-all"
              type="submit"
              onClick={() => navigate(path)}
            >
              Xem thêm
            </button>{" "}
          </div>
          <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-[20px]">
            <ListFilm listFilm={listFilm.slice(0, 12)} />
          </div>
        </div>
        <div className=" col-span-12 md:col-span-4 ">
          <div className="p-[30px] bg-gradient-to-b from-indigo-500 mt-[30px] box-border rounded-t-2xl mb-[5px] ">
            <h1 className="text-2xl text-mainTextColor font-semibold ">
              Top {title.toLowerCase()} thịnh hành
            </h1>
          </div>
          <div className="scroll h-[600px] md:h-[920px] overflow-y-auto">
            <ListFilm listFilm={listTrending} isTrending={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListFilmInHome;
