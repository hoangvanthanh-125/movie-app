import React from 'react';
import { Link } from 'react-router-dom';
import { countryData, DataFilter, genres } from '../data/filterData';

function Footer() {
  return (
    <div className='text-secondTextColor px-5 md:px-[50px] box-border flex justify-between items-center py-[20px] bg-gray-900 mt-[30px]'>
     <div>
       <h1 className='text-lg font-semibold text-indigo-500 mb-[10px]'>Thể loại</h1>
     <ul>
        {genres.slice(0,5).map((item:DataFilter,index:number) => <li className='hover:text-indigo-500 cursor-pointer transition-all mb-[5px]' key={index}>
         <Link to={`/genre/${item.id}`}>
         {item.name}
         </Link>
        </li>)}
      </ul>
     </div>

     <div>
       <h1 className='text-lg font-semibold text-indigo-500 mb-[10px]'>Quốc gia</h1>
     <ul>
        {countryData.slice(0,5).map((item:DataFilter,index:number) => <li className='hover:text-indigo-500 cursor-pointer transition-all mb-[5px]' key={index}>
         <Link to={`/country/${item.id}`}>
         {item.name}
         </Link>
        </li>)}
      </ul>
     </div>

     <div>
       <h1 className='text-lg font-semibold text-indigo-500 mb-[10px]'>Năm</h1>
     <ul>
        {genres.slice(0,5).map((item:DataFilter,index:number) => <li className='hover:text-indigo-500 cursor-pointer transition-all mb-[5px]' key={index}>
         <Link to={`/year/${item.id}`}>
         {item.name}
         </Link>
        </li>)}
      </ul>
     </div>

    </div>
  );
}

export default Footer;