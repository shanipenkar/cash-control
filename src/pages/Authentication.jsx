import React from "react";
import AuthenticationForm from "../components/AuthenticationForm";
import "../shared/styles.css";

const Register = () => {
  return (
    <>
    <h1 className="font-neucha font-extrabold text-6xl text-center pt-10 mb-2 text-white">Cash Control</h1>
    <h1 className="font-neucha text-3xl text-center mb-3 text-textColor">Let's Login First ... </h1>
      <div className="grid grid-cols-2 grid-flow-col items-center gap-8 justify-items-center">
        <div className="w-2/3 my-3 px-8 py-6 bg-gray-900 rounded-lg h-28 " >
          <h1 className="text-4xl text-white font-medium text-center pt-2 font-neucha">
            Register Now !
          </h1>
        </div>
        <div className="w-2/3 my-3 px-8 py-6 bg-gray-900 rounded-lg h-28">
          <h1 className="text-2xl text-white font-medium text-center font-neucha">
            Already Registered ?
          </h1>
          <h1 className="text-3xl text-white font-medium text-center font-neucha">
            Login Here ...
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-flow-col gap-8 justify-items-center ">
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
