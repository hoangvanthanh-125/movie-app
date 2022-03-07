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
  const { user } = useAppSelector((state) => state.user);  
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
        navigate('/login')

      })
      .catch((error) => {
      });

  };

  return (
    <div
      className={`fixed w-[250px] bg-mainBackGround top-0 right-0 bottom-0 z-10 text-mainTextColor text-[16px] ${
        !openRightSidebar ? "translate-x-full" : "translate-x-[0]"
      } transition-all`}
    >
      <div
        className="max-w-[200px] first-letter:text-[30px] first-letter:font-bold text-indigo-500 cursor-pointer text-center p-[10px]"
        onClick={() => handleClick("/")}
      >
        Film24h
      </div>
      {!user ? (
        <div
          onClick={() => handleClick("/login")}
          className="flex justify-start items-center p-[10px] cursor-pointer md:hover:bg-indigo-500 transition-all border-b border-b-mainTextColor"
        >
          <FontAwesomeIcon icon={faUser} className="mr-[10px] text-[12px]" />
          <span>Đăng nhập</span>
        </div>
      ) : (
        <div
          onClick={() => handleLogOut()}
          className="flex justify-start items-center p-[10px] cursor-pointer md:hover:bg-indigo-500 transition-all border-b border-b-mainTextColor"
        >
          <FontAwesomeIcon icon={faUser} className="mr-[10px] text-[12px]" />
          <span>Đăng xuất</span>
        </div>
      )}
     {user &&  <div onClick={() => handleClick('/collection')} className="flex justify-start items-center p-[10px] cursor-pointer md:hover:bg-indigo-500 transition-all border-b border-b-mainTextColor">
        <FontAwesomeIcon icon={faHeart} className="mr-[10px] text-[12px]" />
        <span>Phim yêu thích</span>
      </div>}
    </div>
  );
}

export default RightSideBar;
