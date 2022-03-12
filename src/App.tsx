import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import DashBoard from "./components/dashboard";
import Login from "./components/login";
import Signup from "./components/signup";
import { USER_ROUTE, USER_ROUTER } from "./constants/route";
import { fetchDataHome } from "./redux/actions/filmDataActions";
import { useAppDispatch } from "./redux/hook";
import { userActions } from "./redux/slice/userSlice";

const firebaseConfig = {
  apiKey: "AIzaSyDKMuS-rA2KDGLzhy3DAEOzMXvt2oZY1TA",
  authDomain: "film24h-f49cb.firebaseapp.com",
  projectId: "film24h-f49cb",
  storageBucket: "film24h-f49cb.appspot.com",
  messagingSenderId: "961970532205",
  appId: "1:961970532205:web:0b26fb63a1581b789e3464",
  measurementId: "G-S5DBLJLHXZ"
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
        <Routes>{renderUserRoute()}
        <Route element={<Login />} path='/login' />
        <Route element={<Signup />} path='/signup' />
        </Routes>
      </Router>

      <ToastContainer autoClose={1500} />{" "}
    </>
  );
}

export default App;
