import React from "react";
interface Props {
  title: any;
  loading: boolean;
  handleClick: () => void;
  bg?: string;
  width?: string;
}
function ButtonLoading({ title, loading, handleClick, bg, width }: Props) {
  return (
    <button
      disabled={loading}
      onClick={() => handleClick()}
      className={`text-mainTextColor ${
        bg ? `bg-red-600` : "bg-indigo-500"
      } p-[7px] text-center ${
        width ? "w-full" : ``
      } rounded-sm cursor-pointer hover:opacity-80 mt-[10px] flex justify-center items-center disabled:opacity-30 disabled:cursor-default `}
    >
      {loading && (
        <img
          src="https://i0.wp.com/raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_square_large.gif?w=770&ssl=1"
          className="mr-2 w-5 h-5"
          alt=""
        />
      )}
      {title}
    </button>
  );
}

export default ButtonLoading;
