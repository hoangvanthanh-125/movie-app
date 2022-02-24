import React, { useState } from "react";
import { Collapse } from "react-collapse";
interface Props {
  item: any;
}

function MenuItem({ item }: Props) {
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState("+");
  const handleClickIcon = (e: React.MouseEvent<HTMLSpanElement>) => {
    console.log(e.target);

    setOpen(!open);
    open ? setIcon("+") : setIcon("-");
  };
  return (
    <div className="border-b-[0.1px] first:border-t-[1px]" key={item.name}>
      <div className="flex justify-between items-center px-[10px] py-[10px] text-mainTextColor">
        <span className="font-semibold">{item.name}</span>
        {item.dropdown && (
          <span className=" w-[30px] inline-block h-full text-right" onClick={(e) => handleClickIcon(e)}>{icon}</span>
        )}
      </div>
      {item.dropdown && (
        <Collapse isOpened={open}>
          <div className="flex justify-start items-center flex-wrap p-[10px]">
            {item.listOption?.map((item: any,index:number) => (
              <div
                className="text-mainTextColor text-sm ml-[10px] py-[5px]"
                key={index}
              >
                {item?.name}
              </div>
            ))}
          </div>
        </Collapse>
      )}
    </div>
  );
}

export default MenuItem;
