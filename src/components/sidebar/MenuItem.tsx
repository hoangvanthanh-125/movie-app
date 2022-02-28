import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { useLocation, useNavigate } from "react-router";
import { HeaderItem } from "../../constants";
import { useAppDispatch } from "../../redux/hook";
import { uiActions } from "../../redux/slice/uiSlice";
import { DataFilter } from "../data/filterData";
interface Props {
  item: any;
}

function MenuItem({ item }: Props) {
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState("+");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const handleClickIcon = (e: React.MouseEvent<HTMLSpanElement>) => {
    console.log(e.target);

    setOpen(!open);
    open ? setIcon("+") : setIcon("-");
  };
  const handleClickItemMenu = (item: HeaderItem) => {
    if (item.name === "Phim lẻ") {
      dispatch(uiActions.toggleSidebar());
      navigate("/list/movie");
    } else if (item.name === "Phim bộ") {
      dispatch(uiActions.toggleSidebar());
      navigate("/list/tv");
    }
  };
  const handleClickItemOption = (item: HeaderItem, itemOption: DataFilter) => {
    dispatch(uiActions.toggleSidebar());
    if (item.name === "Thể loại") {
      navigate(`/genre/${itemOption.id}`);
    } else if (item.name === "Năm phát hành") {
      navigate(`/year/${itemOption.id}`);
    } else if (item.name === "Quốc gia") {
      navigate(`/country/${itemOption.id}`);
    }
  };
  return (
    <div
      onClick={() => handleClickItemMenu(item)}
      className="border-b-[0.1px] first:border-t-[1px]"
      key={item.name}
    >
      <div className="flex justify-between items-center px-[10px] py-[10px] text-mainTextColor">
        <span
          className={`font-medium ${
            pathname === item?.path ? "text-indigo-500" : ""
          } font-semibold`}
        >
          {item.name}
        </span>
        {item.dropdown && (
          <span
            className=" w-[30px] inline-block h-full text-right"
            onClick={(e) => handleClickIcon(e)}
          >
            {icon}
          </span>
        )}
      </div>
      {item.dropdown && (
        <Collapse isOpened={open}>
          <div className="flex justify-start items-center flex-wrap p-[10px]">
            {item.listOption?.map((itemOption: any, index: number) => (
              <div
                className="text-mainTextColor text-sm ml-[10px] py-[5px]"
                key={index}
              >
                <span onClick={() => handleClickItemOption(item, itemOption)}>
                  {itemOption?.name}
                </span>
              </div>
            ))}
          </div>
        </Collapse>
      )}
    </div>
  );
}

export default MenuItem;
