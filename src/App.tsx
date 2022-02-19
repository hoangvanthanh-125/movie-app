import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Overlay from './components/overlay';
import Sidebar from './components/sidebar';


function App() {
  return (
   <>
   <Header />
   <Home />
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
