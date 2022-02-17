import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { listHeader } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { uiActions } from "../../redux/slice/uiSlice";
import MenuItem from "./MenuItem";

function Sidebar() {
  const { openSidebar } = useAppSelector((state) => state.ui);
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState("+");
  const dispatch = useAppDispatch();
  const handleClickIcon = (e:React.MouseEvent<HTMLSpanElement>) => {
    console.log(e.target);
    
    setOpen(!open);
    open ? setIcon("+") : setIcon("-");
  };
  const handleOnclickIconSidebar = () => {
    dispatch(uiActions.toggleSidebar());
  };
  return (
    <div
      className={`md:hidden fixed top-0 left-[-200px] bottom-0 w-[200px] bg-mainBackGround z-[2] ${
        openSidebar ? "translate-x-full" : "translate-x-0"
      } transition-all overflow-auto`}
    >
      <div className="text-mainTextColor px-[10px] py-[10px] flex justify-between items-center  border-b-[1px]">
        <h1 className="font-semibold text-[18px]">Danh mục </h1>
        <FontAwesomeIcon
          onClick={() => handleOnclickIconSidebar()}
          icon={faArrowLeft}
        />
      </div>
      {listHeader.map((item) => (
        <MenuItem item={item} />
      ))}
    </div>
  );
}

export default Sidebar;
