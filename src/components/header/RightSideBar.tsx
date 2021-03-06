import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth, signOut } from "firebase/auth";
import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { uiActions } from "../../redux/slice/uiSlice";
import { userActions } from "../../redux/slice/userSlice";

function RightSideBar() {
  const { user } = useAppSelector((state) => state.user) as any;
  const { openRightSidebar } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
    dispatch(uiActions.closeOverlay());
    dispatch(uiActions.closeRightSidebar());
  };
  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(uiActions.closeOverlay());
        dispatch(uiActions.closeRightSidebar());
        dispatch(userActions.setUser(null));
        Cookies.remove("token");
        navigate("/login");
      })
      .catch((error) => {});
  };

  return (
    <div
      className={`fixed w-[250px] bg-mainBackGround top-0 right-0 bottom-0 z-10 text-mainTextColor text-[16px] ${
        !openRightSidebar ? "translate-x-full" : "translate-x-0"
      } transition-all`}
    >
      {user ? <div className="flex flex-col justify-center items-center p-[10px]">
        <div className=" text-mainTextColor w-[80px] h-[80px] bg-indigo-500 rounded-[80px]  text-center items-center flex justify-center font-semibold cursor-pointer md:hover:bg-indigo-700 transition-all border-2 border-mainTextColor">
          {user?.displayName!?.charAt(0).toUpperCase()}
        </div>
        <p className="text-center mt-[5px] font-semibold">{user?.displayName}</p>
      </div>:<div
        className="max-w-[200px] first-letter:text-[30px] first-letter:font-bold text-indigo-500 cursor-pointer text-center p-[10px]"
        onClick={() => handleClick("/")}
      >
        Film24h
      </div>}
      {!user ? (
        <div
          onClick={() => handleClick("/login")}
          className="flex justify-start items-center p-[10px] cursor-pointer md:hover:bg-indigo-500 transition-all border-b border-b-mainTextColor"
        >
          <FontAwesomeIcon icon={faUser} className="mr-[10px] text-[12px]" />
          <span>????ng nh???p</span>
        </div>
      ) : (
        <div
          onClick={() => handleLogOut()}
          className="flex justify-start items-center p-[10px] cursor-pointer md:hover:bg-indigo-500 transition-all border-y border-y-mainTextColor"
        >
          <FontAwesomeIcon icon={faUser} className="mr-[10px] text-[12px]" />
          <span>????ng xu???t</span>
        </div>
      )}
      {user && (
        <div
          onClick={() => handleClick("/collection")}
          className="flex justify-start items-center p-[10px] cursor-pointer md:hover:bg-indigo-500 transition-all border-b border-b-mainTextColor"
        >
          <FontAwesomeIcon icon={faHeart} className="mr-[10px] text-[12px]" />
          <span>Phim y??u th??ch</span>
        </div>
      )}
    </div>
  );
}

export default RightSideBar;
