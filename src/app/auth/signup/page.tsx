"use client";
import Auth from "@/components/auth";
import { signup } from "@/services/postService";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";
const Signup = () => {
  const router = useRouter();
  const onClick = async (data: any) => {
    try {
      const signupPromise = signup(data);
      toast.promise(signupPromise, {
        loading: "Loading",
        success: "Signup Success ! Please Login to Continue",
        error: "Signup Error !",
      });
      await signupPromise;
      router.push("/auth/login");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Auth isLogin={false} func={onClick} />
    </>
  );
};

export default Signup;
