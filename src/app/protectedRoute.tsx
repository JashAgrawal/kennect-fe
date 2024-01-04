"use client";
import { isValidUser } from "@/services/postService";
import { getCookie } from "cookies-next";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ProtectedRoute = () => {
  const [isLogin, setIsLogin] = useState(false);
  const authRoutes = ["/auth/login", "/auth/signup"];
  const protectedRoutes = ["/", "/post"];
  // const router = useRouter();
  const pathname = usePathname();
  const router = useRouter();
  const checkLogin = async () => {
    try {
      const token = getCookie("token");
      if (!token) {
        setIsLogin(false);
        if (protectedRoutes.includes(pathname)) {
          router.replace("/auth/login");
        }
        // throw new Error("UnAuthorized");
      }
      const res = await isValidUser();

      setIsLogin(true);
      if (authRoutes.includes(pathname)) {
        router.replace("/");
      }
    } catch (e) {
      setIsLogin(false);
      if (protectedRoutes.includes(pathname)) {
        router.replace("/auth/login");
      }
      throw e;
    }
  };
  useEffect(() => {
    const prom = checkLogin();
    toast.promise(
      prom,
      {
        error: "Please Login to contiue",
        loading: "Loading",
        success: "",
      },
      { id: "protected", success: { duration: 0 } }
    );
    console.log(pathname);
  }, [pathname]);
  return (
    <>
      <Toaster position="top-right" />
    </>
  );
};

export default ProtectedRoute;
