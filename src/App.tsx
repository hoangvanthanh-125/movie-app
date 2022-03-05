import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/dashboard";
import Login from "./components/login";
import Sidebar from "./components/sidebar";
import { USER_ROUTE, USER_ROUTER } from "./constants/route";
import { fetchDataHome } from "./redux/actions/filmDataActions";
import { useAppDispatch } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchDataHome());
  }, []);
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
        <Routes>{renderUserRoute()}
        </Routes>
      </Router>
    </>
  );
}

export default App;
