import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchListSearch } from "../../apis/filmApi";
import Loading from "../../common/Loading";
import ListFilm from "../ListFilm";
import Pagination from "../Pagination";

function SearchPage() {
  const { query } = useParams();
  const [totalPage, setTotalPage] = useState(0);
  const [totalResult, setTotalResult] = useState(0);
  const [page, setPage] = useState(1);
  const [listFilm, setListFilm] = useState([]);
  const [loading, setLoading] = useState(false);
  const handlePageChange = (page: number) => {
    setPage(page);
  };
  useEffect(() => {
    setLoading(true);
    fetchListSearch(query!, page).then((res) => {
      const data = res.data;
      if (res.status === 200) {
        setTotalPage(data?.total_pages);
        setTotalResult(data?.total_results);
        const { results } = data;
        let listFilm = results?.filter(
          (film: any) =>
            film?.media_type === "tv" || film?.media_type === "movie"
        );
        const listPersion = results?.filter(
          (film: any) => film?.media_type === "persion"
        );
        listPersion?.forEach((item: any) => {
          listFilm = listFilm?.concat(item?.known_for);
        });
        setListFilm(listFilm);
        setLoading(false);
      }
    });
  }, [query, page]);
  return !loading ? (
    <div className="text-mainTextColor p-[20px] md:p-[50px] md:pt-[30px]">
      <h1 className="text-2xl font-semibold">
        Có <span className="text-indigo-500">{totalResult}</span> kết quả được
        tìm thấy
      </h1>
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-[20px] mb-[20px]">
        <ListFilm listFilm={listFilm} />
      </div>
      <Pagination
        totalPage={totalPage}
        currentPage={page}
        handlePageChange={handlePageChange}
      />
    </div>
  ) : (
    <Loading />
  );
}

export default SearchPage;
