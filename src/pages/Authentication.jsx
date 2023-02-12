import React from "react";
import Header from "../components/Header";
import AuthenticationForm from "../components/AuthenticationForm";
import "../shared/styles.css";

const Register = () => {
  return (
    <>
      <div className="grid grid-cols-2 grid-flow-col items-center gap-auto">
        <div className="rounded w-full my-10">
          <h1 className="text-4xl text-white font-medium text-center">
            Register Now!
          </h1>
        </div>
        <div className="rounded w-full my-10">
          <h1 className="text-3xl text-white font-medium text-center">
            Already Registered?
          </h1>
          <h1 className="text-4xl text-white font-medium text-center">
            Login Here...
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-flow-col items-center gap-auto">
        <div>
          <AuthenticationForm type="Register" />
        </div>
        <div>
          <AuthenticationForm type="Login" />
        </div>
      </div>
    </>
  );
};

export default Register;
