import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hook";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../App";
import ListFilm from "../ListFilm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import Loading from "../../common/Loading";
import { CheckNotLogin } from "../../helper/checkNotLogin";

function Collection() {
  CheckNotLogin();
  const { user } = useAppSelector((state) => state.user) as any;
  const [listFilm, setListFilm] = useState([1]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user) {
      let listFilm = [] as any;
      const fetchListFilm = async () => {
        const q = query(collection(db, "film"), where("uid", "==", user.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          listFilm.push(doc.data());
        });
        setListFilm(listFilm);
      };
      fetchListFilm();
      setLoading(false);
    }
  }, [user]);

  return !loading ? (
    <div className="px-[20px] md:px-[50px]">
      <div className="w-full h-[30px] bg-gray-700 text-mainTextColor flex items-center justify-start py-[10px] mt-[30px] mb-[30px]">
        <div
          onClick={() => navigate("/")}
          className="ml-[10px] hover:text-indigo-500 cursor-pointer transition-all"
        >
          <FontAwesomeIcon icon={faHome} className="text-[14px]" />
          <span className="ml-[5px]">Trang chủ</span>
        </div>
        <span className="mx-[5px]">/</span>
        <span>Phim yêu thích</span>
      </div>
      {listFilm.length > 0 ? (
        <div className="text-mainTextColor]">
          <h1 className="text-indigo-500 text-2xl font-semibold mb-[20px]">
            Các phim yêu thích
          </h1>
          <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-[20px]">
            <ListFilm listFilm={listFilm} />{" "}
          </div>
        </div>
      ) : (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-mainTextColor flex justify-center items-center flex-col">
          <h1 className="text-indigo-500 text-2xl font-semibold mb-[10px]">
            Chưa có phim yêu thích
          </h1>
          <button
            onClick={() => navigate("/")}
            className="outline-none border-none p-[10px] bg-indigo-500 md:cursor-pointer md:hover:bg-indigo-700 "
          >
            Trở về trang chủ
          </button>
        </div>
      )}
    </div>
  ) : (
    <Loading />
  );
}

export default Collection;
