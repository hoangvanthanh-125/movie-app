import React from "react";
import { listHeader } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="h-[60px] bg-mainBackGround box-border text-mainTextColor flex justify-between items-center p-[10px] px-[50px] fixed top-0 left-0 right-0">
      <FontAwesomeIcon icon={faList} className="md:hidden" />
      <div className="max-w-[200px]">LogoPhim</div>
      <ul className=" hidden md:flex w-[768px] justify-between items-center">
        {listHeader.map((item) => (
          <li className="cursor-pointer md:hover:text-hoverColor relative group inline-block transition-all">
            <span> {item.name}</span>
            {item.dropdown && (
              <FontAwesomeIcon
                icon={faCaretDown}
                className="ml-[5px] text-[12px]"
              />
            )}
            {item.dropdown && (
              <div className="min-w-[400px] min-h-[100px] box-border p-[20px] bg-mainTextColor absolute bottom-[-110px]  right-[10px] hidden group-hover:flex animate-wiggle transition-all rounded group-hover:flex-wrap justify-start items-center before:absolute  before:top-[-30px] before:right-[10px] before:w-0 before:h-0  before:border-x-[20px] before:border-x-transparent before:border-y-[20px] before:border-t-transparent before:border-b-mainTextColor after:absolute after:inset-0 after:bg-red-500 after:h-[20px] after:top-[-17px] after:opacity-0">
                {item.listOption?.map((item) => (
                  <span className="ml-[20px] text-mainBackGround font-semibold hover:text-hoverColor transition-all">
                    {item}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
