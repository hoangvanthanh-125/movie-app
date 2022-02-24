import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faList,
  faSearch,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  totalPage: number;
  handlePageChange: (value: number) => void;
  currentPage: number;
}
function Pagination({ totalPage, handlePageChange, currentPage }: Props) {
  const pageArr = [];
  for (let i = 1; i <= totalPage; i++) {
    pageArr.push(i);
  }
  const handleClickPageNumber = (num?: number) => {
    if (num) {
      handlePageChange(num);
    }
  };
  const handleChangepage = (num:number) => {
  if(num + currentPage > 0 && num + currentPage <= totalPage){
    handlePageChange(currentPage + num);
  }
  }
  return (
    <div className="flex items-center justify-center mb-[10px]">
      <FontAwesomeIcon
      onClick={() => handleChangepage(-1)}
        icon={faAngleLeft}
        className=" px-[5px] w-[20px] h-[20px] py-[5px] bg-gray-700 cursor-pointer rounded-sm text-mainTextColor mr-[5px]"
      />
      {pageArr.slice(currentPage - 1, currentPage + 5).map((item) => (
        <div
          onClick={() => handleClickPageNumber(item)}
          className={`text-mainTextColor w-[30px] h-[30px] p-[5px] bg-gray-700 mx-[5px] text-center ${
            item === currentPage ? "bg-indigo-500" : ""
          } cursor-pointer hover:bg-indigo-400 transition-all `}
          key={item}
        >
          {item}
        </div>
      ))}
      <FontAwesomeIcon
        onClick={() => handleChangepage(1)}
        icon={faAngleRight}
        className=" px-[5px] w-[20px] h-[20px] py-[5px] bg-gray-700 cursor-pointer rounded-sm text-mainTextColor ml-[5px]"
      />
    </div>
  );
}

export default Pagination;
