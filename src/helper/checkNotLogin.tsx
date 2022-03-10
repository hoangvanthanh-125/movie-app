import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const CheckNotLogin = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);
};
