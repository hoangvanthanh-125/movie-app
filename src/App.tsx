import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/dashboard";
import { USER_ROUTE, USER_ROUTER } from "./constants/route";
import { fetchDataHome } from "./redux/actions/filmDataActions";
import { useAppDispatch } from "./redux/hook";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { userActions } from "./redux/slice/userSlice";
import Cookies from "js-cookie";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const firebaseConfig = {
  apiKey: "AIzaSyDfK4c1KdE88CZfa-p3ZY2QBksW-FT7esU",
  authDomain: "movieapp-38175.firebaseapp.com",
  projectId: "movieapp-38175",
  storageBucket: "movieapp-38175.appspot.com",
  messagingSenderId: "1037860252271",
  appId: "1:1037860252271:web:439d43dfccc1739295bb9a",
  measurementId: "G-BB5NXHB1RE",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();

function App() {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
      } else {
      }
      const token = await user.getIdToken();
      Cookies.set("token", token);
      dispatch(userActions.setUser(docSnap.data()));
    } else {
    }
  });
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
        <Routes>{renderUserRoute()}</Routes>
      </Router>
      <ToastContainer autoClose={1500} />{" "}
    </>
  );
}

export default App;
