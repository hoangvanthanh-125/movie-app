import React from "react";
import { useForm } from "react-hook-form";
import { countryData, DataFilter, genres, listYear } from "../data/filterData";
import { Filter } from "../FilmPage";
type FormData = {
  genre: string;
  country: string;
  year: string;
  sortBy: string;
};
interface Props {
  handleFilter: (filter: Filter) => void;
}

function FilterFilm({ handleFilter }: Props) {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    console.log("data" + data);

    const { country, genre, sortBy, year } = data;
    handleFilter({
      country,
      genre,
      page: 1,
      sortBy,
      year,
    });
  });

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center justify-start flex-wrap  pb-[20px] "
    >
      <select
        {...register("genre")}
        className="bg-gray-700 p-[5px] rounded-sm mr-[10px] text-mainTextColor mt-[10px] font-semibold text-[13px] border border-indigo-400 basis-1/6"
      >
        <option value="">Thể loại</option>
        {genres.map((item: DataFilter, index) => (
          <option key={index} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <select
        className="bg-gray-700 p-[5px] rounded-sm mr-[10px] text-mainTextColor mt-[10px] font-semibold text-[13px] border border-indigo-400 basis-1/6"
        {...register("country")}
      >
        <option value="">Quốc gia</option>
        {countryData.map((item: DataFilter, index) => (
          <option key={index} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <select
        className="bg-gray-700 p-[5px] rounded-sm mr-[10px] text-mainTextColor mt-[10px] font-semibold text-[13px] border border-indigo-400 basis-1/6"
        {...register("year")}
      >
        <option value="">Năm phát hành</option>
        {listYear.map((item: DataFilter, index) => (
          <option key={index} value={item.id}>
            {item.name.toString()}
          </option>
        ))}
      </select>
      <select
        className="bg-gray-700 p-[5px] rounded-sm mr-[10px] text-mainTextColor mt-[10px] font-semibold text-[13px] border border-indigo-400 basis-1/6"
        {...register("sortBy")}
      >
        <option value="">Sắp xếp theo</option>
        <option value="popularity.desc">Theo độ phổ biến</option>
        <option value="vote_count.desc">Theo điểm đánh giá</option>
        <option value="release_date.desc">Theo ngày ra mắt</option>
      </select>

      <button
        className="p-[4px] rounded-sm mr-[5px] text-mainTextColor mt-[10px] font-semibold text-[13px] border border-indigo-400 bg-indigo-500 hover:bg-indigo-700 transition-all"
        type="submit"
      >
        Lọc phim
      </button>
    </form>
  );
}

export default FilterFilm;
