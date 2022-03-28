import React from "react";
function Loading() {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5]  text-mainTextColor h-full w-full bg-mainBackGround flex justify-center items-center">
      
      <img
        src="/Loading.gif"
        className="mr-2 w-[70px] h-[70px]"
        alt=""
      />
    </div>
  );
}

export default Loading;
