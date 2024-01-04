import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import bg from "@/assets/background.jpg";
const Auth = ({ isLogin, func }: { isLogin: boolean; func: any }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    func({ Email: email, Password: password, Name: username });
  };
  return (
    <>
      <div>
        <div className="bg-gray-100 flex justify-center items-center h-screen overflow-hidden">
          <div className="w-1/2 h-screen hidden lg:flex overflow-hidden">
            <Image
              src={bg}
              alt="bg image"
              //   fill
              className="w-full h-full object-cover"
            />
            {/* <img
            src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat"
            alt="Placeholder Image"
            className="object-cover w-full h-full"
          /> */}
          </div>
          <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
            <h1 className="text-2xl font-semibold mb-4">
              {isLogin ? "Login" : "Signup"}
            </h1>
            <form onSubmit={onSubmit}>
              {!isLogin && (
                <div className="mb-4">
                  <label htmlFor="username" className="block text-gray-600">
                    Name
                  </label>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    required
                    id="username"
                    name="username"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
              )}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>

            <div className="mt-6 text-blue-500 text-center">
              <Link
                href={isLogin ? "/auth/signup" : "/auth/login"}
                className="hover:underline"
              >
                {!isLogin ? "Login" : "Sign Up"} Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
