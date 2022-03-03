import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getListFilm } from "../../apis/filmApi";
import { findTitileFilmPage } from "../../helper/findTitleFilmPage";
import FilterFilm from "../FilterFilm";
import ListFilm from "../ListFilm";
import Pagination from "../Pagination";
export interface Filter {
  page: number;
  year: string;
  genre: string;
  sortBy: string;
  country: string;
}
function FilmPage() {
  const { type, option } = useParams();
  let title = findTitileFilmPage(type!, option!);

  const [filters, setFilters] = useState<Filter>({
    page: 1,
    year: "",
    genre: "",
    sortBy: "",
    country: "",
  });
  const [totalPage, setTotalPage] = useState<number>(0);
  const [listFilm, setListFilm] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchFilm = async () => {
      const { page, year, genre, sortBy, country } = filters;
      const respon = await getListFilm(
        { page, year, genre, sortBy, country },
        type!,
        option!
      );
      const { results, total_pages } = respon?.data;
      setTotalPage(total_pages);
      setListFilm(results);
    };
    fetchFilm();
  }, [filters, type, option]);

  const handlePageChange = (pageNumber: number) => {
    setFilters({ ...filters, page: Number(pageNumber) });
  };

  const handleFilter = (filter: Filter) => {
    setFilters(filter);
  };
  return (
    <div className="px-[20px] md:px-[50px] rounded-sm ">
      <div className="w-full h-[30px] bg-gray-700 text-mainTextColor flex items-center justify-start py-[10px] mt-[30px]">
        <div
          onClick={() => navigate("/")}
          className="ml-[10px] hover:text-indigo-500 cursor-pointer transition-all"
        >
          <FontAwesomeIcon icon={faHome} className="text-[14px]" />
          <span className="ml-[5px]">Trang chủ</span>
        </div>
        <span className="mx-[5px]">/</span>
        <span>{title}</span>
      </div>
      <h1 className="text-indigo-500 text-2xl font-semibold mt-[30px]">
        {title}
      </h1>
      <FilterFilm handleFilter={handleFilter} />
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-[20px]">
        <ListFilm listFilm={listFilm} />
      </div>

      <Pagination
        totalPage={totalPage}
        handlePageChange={handlePageChange}
        currentPage={filters.page}
      />
    </div>
  );
}

export default FilmPage;
