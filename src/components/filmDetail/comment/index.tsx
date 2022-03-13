import {
  collection, onSnapshot,
  orderBy,
  query,
  where
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { db } from "../../../App";
import FormComment from "../FormComment";
import ListComment from "./ListComment";

function Comment() {
  const { id, type } = useParams();
  const [listCommnet, setListComment] = useState([]);
  const { register, watch } = useForm();

  useEffect(() => {
    const q = query(
      collection(db, "comments"),
      where("filmId", "==", id),
      where("filmType", "==", type),
      orderBy("createdAt", `${watch("sortBy") == 1 ? "asc" : "desc"}`)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot: any) => {
      const listComment: any = [];
      querySnapshot.forEach((doc: any) => {
        listComment.push(doc.data());
      });
      setListComment(listComment);
    });
  }, [type, id,watch('sortBy')]);
  return (
    <div className="bg-white p-[15px] box-border rounded-md mt-[20px]">
      <div className="flex justify-between items-center mb-[20px]">
        <p className="font-semibold">Có {listCommnet?.length} bình luận</p>
        <form className="">
          <select
            {...register("sortBy")}
            className="border border-gray-700 rounded-sm"
          >
            <option value={""}>Sắp xếp</option>
            <option value={0}>Mới nhất</option>
            <option value={1}>Cũ nhất</option>
          </select>
        </form>
      </div>
      <FormComment />
      <ListComment listComment={listCommnet} sortBy={watch("sortBy")} />
    </div>
  );
}

export default Comment;
