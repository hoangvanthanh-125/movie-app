import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getListFilm } from '../../apis/filmApi';
import FilterFilm from '../FilterFilm';
import ListFilm from '../ListFilm';
import Pagination from '../Pagination';

function FilmPage() {
  const {type}= useParams();
  console.log(type);
  
  const  [filters, setFilters] = useState({
    page: 1,
    year: "",
    genre: "",
    sortBy: "popularity.desc",
    country: "en",
  });
  const [totalPage,setTotalPage] = useState();
  const [listFilm,setListFilm] = useState();
  useEffect(() => {
    const fetchFilm = async() => {
      const {page,year,genre,sortBy,country} = filters;
      const respon = await getListFilm({page,year,genre,sortBy,country},type!);
      const { results, total_pages } = respon.data;
      setTotalPage(total_pages);
      setListFilm(results);
    }
    fetchFilm();
  },[filters,type])
  const handleChangeGenre = (value:string) => {
    setFilters({ ...filters, page: 1, genre: value });
  };

  const handleChangeYear = (value:string) => {
    setFilters({ ...filters, page: 1, year: value });
  };

  const handChangeCountry = (value:string) => {
    setFilters({ ...filters, page: 1, country: value });
  };
  const handlePageChange = (pageNumber:string) => {
    setFilters({ ...filters, page: Number(pageNumber) });
  };
  const handleSort = (value:string) => {
    setFilters({ ...filters, page: 1, sortBy: value });
  };
  return (
    <div>
      {/* <FilterFilm handleChangeGenre={handleChangeGenre} handleChangeYear={handleChangeYear} handChangeCountry={handChangeCountry} handleSort={handleSort}  /> */}
      <ListFilm  listFilm = {listFilm}/>
      {/* <Pagination totalPage={totalPage} handlePageChange={handlePageChange} /> */}
    </div>
  );
}

export default FilmPage;