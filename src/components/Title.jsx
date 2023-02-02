import React from 'react'
import { useHistory } from "react-router-dom";

const Title = () => {
    const History = useHistory();
  return (
    <div className="text-center pt-10">
        <h1 className="font-extrabold text-5xl text-textColor w-full">Cash Control</h1>
        <h2 className="font-textColor text-white py-2 pb-5">
          Manage Your Cash Flow Easily In One Click!
        </h2>
        <button
          className="btn bg-black text-white hover:bg-textColor2 hover:text-black"
          onClick={() => {
            History.push("/cashflow");
          }}
        >
          Cash Flow
        </button>
      </div>
  );
}

export default Title;