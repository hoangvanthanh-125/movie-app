import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { uiActions } from '../../redux/slice/uiSlice';

function Overlay() {
  const dispatch = useAppDispatch();
  const {openSidebar} = useAppSelector(state => state.ui);
  return (
    <div onClick={() => dispatch(uiActions.toggleSidebar())} className={`fixed inset-0 bg-overlayColor z-[1] md:hidden ${openSidebar?'block animate-fadeIn' : 'hidden'} animate-fadeOut `}>
      
    </div>
  );
}

export default Overlay;