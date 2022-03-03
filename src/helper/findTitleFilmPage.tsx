import { countryData, DataFilter, genres } from "../components/data/filterData";

export const findTitileFilmPage = (type: string, option: string) => {
  let title: string = "";
  if (option === "list") {
    if (type == "movie") {
      title = "Phim lẻ";
    } else {
      title = "Phim bộ";
    }
  } else if (option === "genre") {
    title = "Phim " + genres.find((item: DataFilter) => item.id == type)?.name;
  } else if (option === "country") {
    title =
      "Phim " + (countryData.find((item: DataFilter) => item.id === type)?.name || '');
  } else if (option === "year") {
    title = "Phim " + type;
  }
  
  return title || '';
};
