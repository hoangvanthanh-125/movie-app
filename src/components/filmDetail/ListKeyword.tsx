import {
  faTag
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
import axiosClient from '../../apis/axiosClient';
import { API_KEY } from '../../constants';
interface Props {
  type: string;
  id: string,
  listKeyWordFlim:any
}
function ListKeyword({type,id,listKeyWordFlim}:Props) {
  // const [listKeyword,setlistKeyword] = useState<any>([]);    
  // useEffect(() => {
  // axiosClient.get(`/${type}/${id}/keywords?api_key=${API_KEY}`).then((res) => {
  //   if(res.status === 200){
  //     setlistKeyword(res?.data?.keywords);
  //   }
  // })
  // },[id,type])
  return (
    <div className='text-secondTextColor flex justify-start items-center flex-wrap mt-[10px]'>
      <div className='flex justify-start items-center'><FontAwesomeIcon icon={faTag}/>  <span className='ml-[5px]'>Keywords : </span> </div>
      {listKeyWordFlim?.map((item:any,index:number) => (
        <span className='inline-block p-1 border border-indigo-500 rounded-xl ml-[5px] cursor-pointer hover:text-mainTextColor transition-all mb-[5px] text-[12px]' key={index}>{item?.name}</span>
      ))}
    </div>
  );
}

export default ListKeyword;