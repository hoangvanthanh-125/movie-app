import React from 'react';
import FilmItem from '../FilmItem';
interface Props{
  listFilm:any
}
function ListFilm({listFilm} : Props) {
  return (
    <div  className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-[20px]'>
      {listFilm?.map((film:any,index:number) =>{
       if( film.poster_path ) return ( <FilmItem key={index} film={film}   />)
      })}
    </div>
  );
}

export default ListFilm;