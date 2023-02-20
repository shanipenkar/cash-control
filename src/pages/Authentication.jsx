import React from "react";
import AuthenticationForm from "../components/AuthenticationForm";
import "../shared/styles.css";

const Register = () => {
  return (
    <>
      <div className="grid grid-cols-2 grid-flow-col items-center gap-8">
        <div className="w-full my-5 px-8 py-12 bg-gray-900 rounded-lg h-44">
          <h1 className="text-4xl text-white font-medium text-center">
            Register Now!
          </h1>
        </div>
        <div className="w-full my-5 px-8 py-12 bg-gray-900 rounded-lg h-44">
          <h1 className="text-3xl text-white font-medium text-center">
            Already Registered?
          </h1>
          <h1 className="text-4xl text-white font-medium text-center">
            Login Here...
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-flow-col gap-8">
        <div className="w-full px-8 py-12 bg-gray-100 rounded-lg">
          <AuthenticationForm type="Register" />
        </div>
        <div className="w-full px-8 py-12 bg-gray-100 rounded-lg">
          <AuthenticationForm type="Login" />
        </div>
      </div>
    </>
  );
};

export default Register;
