import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import jwt_decode from "jwt-decode";

export const CheckLogin = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      const user = jwt_decode(token) as any;
      if (user?.email && user?.user_id) {
        navigate("/");
      }
    }
  }, [token]);
};
