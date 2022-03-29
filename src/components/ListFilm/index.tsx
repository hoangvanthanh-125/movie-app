import React from "react";
import FilmItem from "../FilmItem";
interface Props {
  listFilm: any;
  isTrending?: boolean;
}
function ListFilm({ listFilm, isTrending }: Props) {
  return (
    <>
      {listFilm?.map((film: any, index: number) => {
        if (film.poster_path)
          return <FilmItem isTrending={isTrending} key={index} film={film} />;
      })}
    </>
  );
}

export default ListFilm;
