import { yupResolver } from "@hookform/resolvers/yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as yup from "yup";
import ButtonLoading from "../../common/ButtonLoading";
import { ToastFuncError, ToastFuncSuccess } from "../../common/toastFunc";
import { CheckLogin } from "../../helper/checkLogin";

interface Data {
  email: string;
  password: string;
}
const schema = yup
  .object({
    email: yup
      .string()
      .required("Vui lòng nhập email")
      .email("Định dạng email không đúng"),
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .min(6, "Tối thiểu 6 kí tự"),
  })
  .required();
function Login() {
  CheckLogin();
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
  });
  const onSubmit = handleSubmit((data) => {
    const { email, password } = data;
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        ToastFuncSuccess("Đăng nhập thành công");
        navigate("/");
        setLoading(false);
      })
      .catch((error) => {
        ToastFuncError(error);
        setLoading(false);
      });
  });

  const navigate = useNavigate();
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-start items-center font-semibold p-[30px] bg-mainTextColor rounded-md">
      <h1 className="max-w-[200px] first-letter:font-bold text-indigo-500 cursor-pointer text-2xl text-center mb-[10px]">
        Đăng nhập
      </h1>
      <form
        onSubmit={onSubmit}
        className="max-w-full w-[300px] box-border flex flex-col justify-start items-center"
      >
        <div className="w-full my-[5px]">
          <input
            {...register("email")}
            className="outline-none border border-gray-400  p-[7px] focus:border-2 focus:border-indigo-500 w-full rounded-sm"
            placeholder="Nhập email"
          />
          <p className="text-red-600 font-normal mt-[5px] text-[12px]">
            {errors.email?.message}
          </p>
        </div>
        <div className="w-full my-[10px]">
          <input
            type="password"
            {...register("password")}
            className="outline-none border border-gray-400 p-[7px]  focus:border-2 focus:border-indigo-500 w-full rounded-sm transition-all "
            placeholder="Nhập mật khẩu"
          />
          <p className="text-red-600 font-normal mt-[5px] text-[12px]">
            {errors.password?.message}
          </p>
        </div>
        <ButtonLoading
          handleClick={onSubmit}
          loading={loading}
          title="Đăng nhập"
          width="full"
        />
      </form>
      <p
        className="pt-[10px] cursor-pointer text-indigo-500 hover:text-indigo-700 transition-all font-normal"
        onClick={() => navigate("/signup")}
      >
        Bạn chưa có tài khoản ?
      </p>
    </div>
  );
}

export default Login;
