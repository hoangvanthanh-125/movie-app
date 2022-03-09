import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../../App";
import { Comment } from "../../../common/interface";
import CommentItem from "./CommentItem";

function ListComment({listComment}:any) {
  
  const [num, setNum] = useState(10);
  
  return (
    <div>
      {listComment?.slice(0, num)?.map((item: Comment, index:number) => (
        <CommentItem key={index} item={item} />
      ))}
      {num < listComment?.length && (
        <div onClick={() => setNum(num + 10)} className="text-mainTextColor bg-indigo-500 p-[7px] text-center  rounded-sm cursor-pointer hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-default">
          {`Hiển thị thêm ${
            listComment?.length - num >= 10 ? 10 : listComment?.length - num
          } bình luận`}
        </div>
      )}
    </div>
  );
}

export default ListComment;
