import { yupResolver } from "@hookform/resolvers/yup";
import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import * as yup from "yup";
import { useAppSelector } from "../../redux/hook";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../App";
import { Comment } from "../../common/interface";
import uniqid from "uniqid";
import dayjs from "dayjs";

interface Data {
  comment: string;
}
const schema = yup
  .object({
    comment: yup.string().required("Chưa có nội dung"),
  })
  .required();
function FormComment() {
  const [focus, setFocus] = useState(false);
  const { user } = useAppSelector((state) => state.user) as any;
  const { register, handleSubmit, watch, setValue } = useForm<Data>({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
  });
  const { type, id } = useParams();
  const onSubmit = handleSubmit(async (data) => {
    const { comment } = data;
    if (user) {
      try {
        const docRef = await addDoc(collection(db, "comments"), {
          content: comment,
          date: dayjs().format("DD-MM-YYYY - HH:MM "),
          filmId: id,
          filmType: type,
          uid: user.uid,
          id: uniqid(),
          listIdReply: [],
          displayName: user?.displayName,
          createdAt: new Date().getTime(),
        } as Comment);
        setValue("comment", "");
      } catch (error: any) {
        alert(error.message);
      }
    } else {
      navigate("/login");
    }
  });

  const navigate = useNavigate();
  const content = watch("comment");

  return (
    <div className="mb-[20px] flex justify-start items-center">
      <div className="w-[40px] h-[40px]  bg-indigo-500  flex justify-center items-center rounded-[40px] mr-[10px] font-semibold text-mainTextColor">
        {user?.displayName?.charAt(0)?.toUpperCase()}
      </div>
      <form
        onSubmit={onSubmit}
        className="max-w-full w-full box-border flex flex-col  justify-start items-center"
      >
        <div className="w-full  ">
          <textarea
            onFocus={() => setFocus(true)}
            {...register("comment")}
            className="outline-none border border-gray-500  p-[7px] focus:border-2 focus:border-indigo-500 w-full  min-h-[100px] rounded-sm"
            placeholder="Thêm bình luận"
          ></textarea>
        </div>
        <div
          className={`flex justify-end items-center w-full border border-gray-500 p-[10px] mt-[-7px] ${
            focus ? "block" : "hidden"
          } bg-gray-200`}
        >
          <input
            type="submit"
            className="text-mainTextColor bg-indigo-500 p-[7px] text-center  rounded-sm cursor-pointer hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-default"
            value="Đăng"
            disabled={content?.trim() ? false : true}
          />
        </div>
      </form>
    </div>
  );
}

export default FormComment;
