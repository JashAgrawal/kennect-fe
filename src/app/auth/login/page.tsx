"use client";
import Auth from "@/components/auth";
import { login } from "@/services/postService";
import { redirect, useRouter } from "next/navigation";
import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { setCookie, getCookie } from "cookies-next";
const Login = () => {
  const router = useRouter();
  const onClick = async (data: any) => {
    try {
      const loginPromise = login(data);
      toast.promise(loginPromise, {
        loading: "Loading",
        success: "Login Success",
        error: "Login Error !",
      });
      const res = await loginPromise;
      setCookie("token", res.data.token);
      setCookie("name", res.data.user.Name);
      setCookie("email", res.data.user.Email);
      console.log(res);
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Auth isLogin func={onClick} />
    </>
  );
};

export default Login;
