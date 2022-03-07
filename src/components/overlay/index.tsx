import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { uiActions } from "../../redux/slice/uiSlice";

function Overlay() {
  const { openOverlay } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(uiActions.closeOverlay());
    dispatch(uiActions.closeRightSidebar());
  };
  return (
    <div
      onClick={() => handleClick()}
      className={`fixed inset-0 bg-overlayColor z-[10] ${
        openOverlay ? "block" : "hidden"
      } `}
    ></div>
  );
}

export default Overlay;
