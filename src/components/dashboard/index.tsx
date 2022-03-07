import React from 'react';
import { useAppSelector } from '../../redux/hook';
import Header from '../header';
import RightSideBar from '../header/RightSideBar';
import Overlay from '../overlay';
import Sidebar from '../sidebar';
interface Props{
  children:any
}

function DashBoard({children} : Props) {
  const {openSearch} = useAppSelector(state => state.ui);
  
  return (
    <div>
      <Header />
      <Overlay />
      <Sidebar />
      <RightSideBar />
      <div className={`${!openSearch ? 'mt-[30px]' : 'mt-[140px] delay-0' } transition-all pt-[30px] `}>
        {children}
      </div>
    </div>
  );
}

export default DashBoard;