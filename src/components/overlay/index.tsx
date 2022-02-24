import React from 'react';
import { useAppDispatch } from '../../redux/hook';
import { uiActions } from '../../redux/slice/uiSlice';

function Overlay() {
  const dispatch = useAppDispatch();
  return (
    <div onClick={() => dispatch(uiActions.toggleSidebar())} className={`fixed inset-0 bg-overlayColor z-[11] hidden `}>
      
    </div>
  );
}

export default Overlay;