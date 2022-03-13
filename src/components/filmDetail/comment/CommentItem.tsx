import React from 'react';
import { Comment } from '../../../common/interface';
interface Props{
  item:Comment
}
function CommentItem({item}:Props) {
  const {content,date,displayName} = item;  
  
  return (
    <div className=' mb-[15px] w-full'>
      <div className='flex items-start justify-start w-full'>
        <div className='w-[40px] h-[40px]  bg-indigo-500  flex justify-center items-center rounded-[40px] mr-[10px] font-semibold text-mainTextColor'>{displayName?.charAt(0)?.toUpperCase()}</div>
      <div className=' flex-1 w-[calc(100%_-_50px)] '>
        <p className='font-semibold text-blue-800'>{displayName}</p>
        <p className=' break-words text-gray-800'>{content}</p>
        <p className='text-[11px] text-gray-500'>{date}</p>
      </div>
      </div>
      
    </div>
  );
}

export default CommentItem;