import React, {useContext} from 'react'
import { useHistory } from "react-router-dom";
import { LoginContext } from "../LoginContext";

const Title = () => {
    const history = useHistory();
    const { isLoggedIn, setIsLoggedIn} = useContext(LoginContext);
    
  return (
    <div className="text-center pt-10">
        <h1 className="font-extrabold text-6xl font-neucha text-white w-full">Cash Control</h1>
        <h2 className="text-textColor text-3xl font-neucha py-2 pb-5">
          Manage Your Cash Flow Easily In One Click!
        </h2>
        <button
          className="btn bg-black text-white "
          onClick={() => {
            isLoggedIn? history.push("/cashflow"): history.push("/auth");
          }}
        >
          Get Started!
        </button>
      </div>
  );
}

export default Title;