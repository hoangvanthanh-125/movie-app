import React from 'react';
import { useAppSelector } from '../../redux/hook';
import Header from '../header';
import Overlay from '../overlay';
interface Props{
  children:any
}

function DashBoard(props : Props) {
  const {openSearch} = useAppSelector(state => state.ui);
  return (
    <div>
      <Header />
      <Overlay />
      <div className={`${!openSearch ? 'mt-[30px]' : 'mt-[140px] delay-0' } transition-all pt-[30px] `}>
        {props.children}
      </div>
    </div>
  );
}

export default DashBoard;