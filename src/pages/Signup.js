import { Link } from "react-router-dom"
import React from "react";
import AuthForm from "../components/AuthForm/AuthForm";

const SignUp = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-white">
      <div className="w-full lg:w-2/4 p-6 pb-0">
        <div className="my-4 py-2">
          {/* <Link to="/">
            <img
              className="cursor-pointer"
              src="/images/logos/bunker.png"
              alt="logo"
            />
          </Link> */}
        </div>
        <div className="">
          <AuthForm type="signUp" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
