import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
interface Props {
  openSearch: boolean;
}
interface FormData {
  query: string;
}
function FormSearch({ openSearch }: Props) {
  const inputRef = useRef<any>(null);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    navigate(`/search/${inputRef.current.value}`);
  });
  useEffect(() => {
    if (openSearch) {
      inputRef?.current?.focus();
    }
  }, [openSearch]);

  return (
    <form onSubmit={onSubmit}>
      <div className="w-[300px] md:w-[768px] bg-white flex justify-between items-center rounded-sm p-[5px] md:p-[7px] md:ml-[30px]">
        <input
          {...register("query")}
          ref={inputRef}
          autoFocus
          type="text"
          placeholder="Nhập tên phim"
          className="border-none outline-none focus:border-2 focus:border-indigo-500 flex-1"
        />
        <FontAwesomeIcon icon={faSearch} className="cursor-pointer ml-[20px]" />
      </div>
    </form>
  );
}

export default FormSearch;
