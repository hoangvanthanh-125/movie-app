import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../App";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { ToastFuncError, ToastFuncSuccess } from "../../common/toastFunc";
import { CheckLogin } from "../../helper/checkLogin";

interface Data {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
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
    name: yup.string().required("Vui lòng nhập tên"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Mật khẩu không khớp"),
  })
  .required();
function Signup() {
  CheckLogin();
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
    const { email, password, name } = data;
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const { uid } = user;
        await setDoc(doc(db, "users", uid), {
          email,
          displayName: name,
          uid,
          password,
        });
        ToastFuncSuccess("Đăng kí thành công,đã đăng nhập");
        navigate('/');
      })
      .catch((error) => {
        ToastFuncError(error);
      });
  });
  const navigate = useNavigate();
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-start items-center font-semibold">
      <h1 className="max-w-[200px] first-letter:font-bold text-indigo-500 cursor-pointer text-2xl text-center mb-[10px]">
        Đăng ký
      </h1>
      <form
        onSubmit={onSubmit}
        className="max-w-full w-[300px] box-border flex flex-col justify-start items-center"
      >
        <div className="w-full my-[5px]">
          <input
            {...register("name")}
            className="outline-none border-2 border-black  p-[7px] focus:border-2 focus:border-indigo-500 w-full rounded-sm"
            placeholder="Nhập tên"
          />
          <p className="text-red-600 font-normal mt-[5px] text-[12px]">
            {errors.name?.message}
          </p>
        </div>
        <div className="w-full my-[5px]">
          <input
            {...register("email")}
            className="outline-none border-2 border-black  p-[7px] focus:border-2 focus:border-indigo-500 w-full rounded-sm"
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
            className="outline-none border-2 border-black p-[7px]  focus:border-2 focus:border-indigo-500 w-full rounded-sm transition-all "
            placeholder="Nhập mật khẩu"
          />
          <p className="text-red-600 font-normal mt-[5px] text-[12px]">
            {errors.password?.message}
          </p>
        </div>
        <div className="w-full my-[5px]">
          <input
            type="password"
            {...register("confirmPassword")}
            className="outline-none border-2 border-black  p-[7px] focus:border-2 focus:border-indigo-500 w-full rounded-sm"
            placeholder="Nhập lại mật khẩu"
          />
          <p className="text-red-600 font-normal mt-[5px] text-[12px]">
            {errors.confirmPassword?.message}
          </p>
        </div>
        <input
          type="submit"
          className="text-mainTextColor bg-indigo-500 p-[7px] text-center w-full rounded-sm cursor-pointer hover:bg-indigo-700 mt-[10px]"
          value="Đăng kí"
        />
      </form>
      <p
        className="pt-[10px] cursor-pointer text-indigo-500 hover:text-indigo-700 transition-all font-normal"
        onClick={() => navigate("/login")}
      >
        Bạn đã có tài khoản ?
      </p>
    </div>
  );
}

export default Signup;
