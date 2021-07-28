import {Link} from "react-router-dom";
import React from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import logo from "../assets/Thumbnail_Debunker_title.svg";
const SignIn = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-blue-800">
      <div className="w-full lg:w-2/4 p-6 pb-0">
        <div className="my-4 py-2">
          <Link to="/">
            <img
              className="cursor-pointer"
              src={logo} 
              alt="logo"
            />
          </Link>
        </div>
        <div className="">
          <AuthForm type="signIn" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
