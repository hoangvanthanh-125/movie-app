import React from 'react';
import { ORIGIN_PATH } from '../../constants';

function FilmItem({film}:any) {
  return (
    <div className='w-[2/5] mb-[15px] cursor-pointer md:hover:scale-110 transition-all'>
      <img className='w-full h-auto max-h-[320px] object-cover' src={`${ORIGIN_PATH}${film.poster_path}`} alt='' />      
      <p className ='max-w-full w-full  max-h-[20px] overflow-hidden text-mainTextColor mt-[10px] '>{film?.name || film?.title}</p>
    </div>
  );
}

export default FilmItem;