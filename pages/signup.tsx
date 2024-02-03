import React, { useState, useEffect } from "react";
import Head from "next/head";
import { EyeOff, Eye } from "heroicons-react";
import axios from "axios";
import { dataBase } from "../base";
import { useRouter } from "next/router";
import Link from "next/link";

const SignUp = () => {
  const [hidePassword, setHidePassword] = useState(false);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userData, setUserData] = useState({});

  const router = useRouter();

  const image_url = "/rainbow-colors.gif";

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
    } else {
      alert("You are good to go");
    }
  };

  return (
    <>
      <div
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // height: "100%",
          backgroundImage: `url(${image_url})`,
        }}
        className=" w-full h-screen backdrop-blur-2xl bg-white/50"
      >
        <div className=" bg-black/50 backdrop-blur-xl h-full px-4 flex justify-center items-center ">
          <form
            onSubmit={handleSubmit}
            className=" bg-white flex w-full sm:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 h-1/2  items-center flex-col p-6 rounded-2xl"
          >
            <h1 className=" text-left w-full font-bold text-4xl ">Sign Up</h1>
            <p></p>
            <div className="flex flex-col w-full mt-6">
              <div className=" flex flex-col py-4 ">
                <input
                  required
                  value={userName}
                  onChange={(e: any) => setUserName(e.target.value)}
                  placeholder="Enter Username"
                  type="text"
                  className="py-2.5 text-sm px-4 tracking-widest border  bg-gray-100 outline-none rounded-xl"
                />
                <input
                  required
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  type="email"
                  className="py-2.5 text-sm px-4 tracking-widest border  bg-gray-100 outline-none rounded-xl my-4"
                />
                <div className="flex justify-between items-center bg-gray-100 border rounded-xl ">
                  <input
                    required
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                    placeholder="Enter Your Password"
                    type={hidePassword ? "text" : "password"}
                    className="py-2.5 text-sm px-4 tracking-widest w-full bg-gray-100 outline-none  rounded-xl"
                  />
                  <button
                    onClick={() => setHidePassword(!hidePassword)}
                    className=" px-2.5"
                  >
                    {hidePassword ? <Eye /> : <EyeOff />}
                  </button>
                </div>
                <div className="flex justify-between items-center bg-gray-100 border rounded-xl mt-4 ">
                  <input
                    required
                    value={confirmPassword}
                    onChange={(e: any) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Your Password"
                    type={hideConfirmPassword ? "text" : "password"}
                    className="py-2.5 text-sm px-4 tracking-widest w-full bg-gray-100 outline-none  rounded-xl"
                  />
                  <button
                    onClick={() => setHideConfirmPassword(!hideConfirmPassword)}
                    className=" px-2.5"
                  >
                    {hideConfirmPassword ? <Eye /> : <EyeOff />}
                  </button>
                </div>
              </div>
              <div className="bg-indigo-500/80 rounded-xl text-center w-full mt-6 hover:bg-indigo-500 transition-all">
                <button
                  // onClick={() => fatchSignUpData()}
                  className="py-3 w-full font-semibold text-white "
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="mt-2 text-sm">
              <p>
                Already have an account? Please{" "}
                <Link
                  className="font-semibold text-blue-500 hover:underline"
                  href="/signin"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
