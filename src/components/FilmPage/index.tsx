import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getListFilm } from "../../apis/filmApi";
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
  const { type } = useParams();
  const [filters, setFilters] = useState<Filter>({
    page: 1,
    year: "",
    genre: "",
    sortBy: "",
    country: "",
  });
  const [totalPage, setTotalPage] = useState<number>(0);
  const [listFilm, setListFilm] = useState();
  console.log(filters);
  useEffect(() => {
    const fetchFilm = async () => {
      const { page, year, genre, sortBy, country } = filters;
      const respon = await getListFilm(
        { page, year, genre, sortBy, country },
        type!
      );
      const { results, total_pages } = respon.data;
      setTotalPage(total_pages);
      setListFilm(results);
    };
    fetchFilm();
  }, [filters, type]);

  const handlePageChange = (pageNumber: number) => {
    setFilters({ ...filters, page: Number(pageNumber) });
  };

  const handleFilter = (filter: Filter) => {
    setFilters(filter);
  };
  return (
    <div>
      <FilterFilm handleFilter={handleFilter} />
      <ListFilm listFilm={listFilm} />
      <Pagination
        totalPage={totalPage}
        handlePageChange={handlePageChange}
        currentPage={filters.page}
      />
    </div>
  );
}

export default FilmPage;
