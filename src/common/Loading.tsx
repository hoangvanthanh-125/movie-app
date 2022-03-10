import React from 'react';

function Loading() {

  return (
    <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5]  text-mainTextColor'>
      
      <p className='font-semibold  text-xl'>Loading...</p>
    </div>
  );
}

export default Loading;