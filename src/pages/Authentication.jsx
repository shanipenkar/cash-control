import React from "react";
import AuthenticationForm from "../components/AuthenticationForm";
import "../shared/styles.css";

const Register = () => {
  return (
    <>
      <div className="grid grid-cols-2 grid-flow-col items-center gap-8 justify-items-center">
        <div className="w-2/3 my-3 px-8 py-6 bg-gray-900 rounded-lg h-24 " >
          <h1 className="text-2xl text-white font-medium text-center pt-2">
            Register Now!
          </h1>
        </div>
        <div className="w-2/3 my-3 px-8 py-6 bg-gray-900 rounded-lg h-24">
          <h1 className="text-lg text-white font-medium text-center">
            Already Registered?
          </h1>
          <h1 className="text-xl text-white font-medium text-center">
            Login Here...
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-flow-col gap-8 justify-items-center">
        <div className="w-2/3">
          <AuthenticationForm type="Register" />
        </div>
        <div className="w-2/3">
          <AuthenticationForm type="Login" />
        </div>
      </div>
    </>
  );
};

export default Register;
