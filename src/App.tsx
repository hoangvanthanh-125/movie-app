import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getListFilm } from "./apis/filmApi";
import "./App.css";
import DashBoard from "./components/dashboard";
import Sidebar from "./components/sidebar";
import { USER_ROUTE, USER_ROUTER } from "./constants/route";

function App() {
  // useEffect(() => {
  //   getListFilm().then((res) => {
  //     console.log(res.data);
      
  //   })
  // })
  const renderUserRoute = () => {
    let result = null;
    if (USER_ROUTER.length > 0) {
      result = USER_ROUTER.map((item: USER_ROUTE, index: number) => (
        <Route
          key={index}
          path={item.path}
          element={
            <DashBoard>
              <item.component />
            </DashBoard>
          }
        />
      ));
    }
    return result;
  };
  return (
    <>
      <Router>
        <Routes>{renderUserRoute()}</Routes>
        <Sidebar />
      </Router>
    </>
  );
}

export default App;
