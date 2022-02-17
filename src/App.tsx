import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import { useAppSelector } from './redux/hook';
import { Collapse } from "react-collapse";
import Sidebar from './components/sidebar';
import Overlay from './components/overlay';


function App() {
  const [open,setOpen] = useState(false);

  
  return (
   <>
   <Header />
   <Sidebar />
   <Overlay />
 {/* <div>
   <button onClick={() => setOpen(!open)}>Nhaans</button>
 <Collapse isOpened={open}>
     <div  className='bg-red-600 w-[100px] h-[100px] animate-wiggle transition-all'>HAHAHA</div>
        </Collapse>
 </div> */}
   </>
  
  );
}

export default App;
