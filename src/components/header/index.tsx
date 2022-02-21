import { faCaretDown, faList, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { listHeader } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { uiActions } from "../../redux/slice/uiSlice";
import FormSearch from "./FormSearch";

function Header() {
  const dispatch = useAppDispatch();
  const {openSearch} = useAppSelector(state => state.ui)
  const clickIconSideBar = () => {
    dispatch(uiActions.toggleSidebar());
  };
  return (
    <div className="fixed top-0 left-0 right-0 z-10 mb-[0px]">
      <div className="h-[60px] w-full max-w-full bg-mainBackGround box-border text-mainTextColor flex justify-between items-center p-[10px] px-[20px] relative z-10 ">
        <FontAwesomeIcon
          onClick={() => clickIconSideBar()}
          icon={faList}
          className="md:hidden px-[7px] py-[5px] bg-gray-700 cursor-pointer rounded-sm "
        />
        <div className="max-w-[200px] first-letter:text-[30px] first-letter:font-bold text-indigo-500">
          Film24h
        </div>
        <ul className=" hidden md:flex w-[768px] justify-between items-center">
          {listHeader.map((item) => (
            <li
              key={item.name}
              className="cursor-pointer md:hover:text-indigo-500 relative group inline-block transition-all"
            >
              <span> {item.name}</span>
              {item.dropdown && (
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="ml-[5px] text-[12px]"
                />
              )}
              {item.dropdown && (
                <div className="min-w-[400px] min-h-[100px] box-border p-[20px] bg-mainTextColor absolute bottom-[-110px]  right-[-30px] hidden group-hover:flex animate-wiggle transition-all rounded group-hover:flex-wrap justify-start items-center before:absolute  before:top-[-30px] before:right-[10px] before:w-0 before:h-0  before:border-x-[20px] before:border-x-transparent before:border-y-[20px] before:border-t-transparent before:border-b-mainTextColor after:absolute after:inset-0 after:bg-red-500 after:h-[20px] after:top-[-17px] after:opacity-0">
                  {item.listOption?.map((item, index) => (
                    <span
                      key={index}
                      className="ml-[20px] text-mainBackGround font-semibold hover:text-indigo-500 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <FontAwesomeIcon
          onClick={() => dispatch(uiActions.toggleSearch())}
          icon={faSearch}
          className="px-[7px] py-[5px] bg-gray-700 cursor-pointer rounded-sm"
        />
      </div>
      <div className={`bg-mainBackGround  p-[20px] h-[80px] box-border ${!openSearch?'translate-y-[-100px] delay-100' : 'translate-y-0'} transition-all flex justify-center items-center`}>
        <FormSearch openSearch = {openSearch} />
      </div>
    </div>
  );
}

export default Header;
