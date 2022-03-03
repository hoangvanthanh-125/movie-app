import React from 'react';
import { useAppSelector } from '../../redux/hook';

function Overlay() {
  const {openOverlay} = useAppSelector(state => state.ui)
  return (
    <div  className={`fixed inset-0 bg-overlayColor z-[10] ${openOverlay ? 'block' : 'hidden'} `}>
      
    </div>
  );
}

export default Overlay;