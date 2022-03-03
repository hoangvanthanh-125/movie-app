import React, { useEffect, useState } from "react";
import axiosClient from "../../apis/axiosClient";
import { API_KEY } from "../../constants";
import ListFilm from "../ListFilm";
interface Props {
  type: string;
  id: string;
}
function ListSimilarFilm({ type, id }: Props) {
  const [listFilm, setListFilm] = useState<any>([]);
  useEffect(() => {
    axiosClient.get(`/${type}/${id}/similar?api_key=${API_KEY}`).then((res) => {
      if (res.status === 200) {
        setListFilm(res?.data.results);
      }
    });
  }, [type, id]);
  return (
    <div>
      <h1 className="text-2xl text-indigo-500 font-semibold">Phim tương tự</h1>
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-[20px]">
        <ListFilm listFilm={listFilm?.slice(0,12)} />
      </div>
    </div>
  );
}

export default ListSimilarFilm;
