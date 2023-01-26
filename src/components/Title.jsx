import React from 'react'
import { useHistory } from "react-router-dom";

const Title = () => {
    const History = useHistory();
  return (
    <div className="text-center pt-10">
        <h1 className="font-extrabold text-5xl text-light w-full">Cash Control</h1>
        <h2 className="font-light text-white py-2 pb-5">
          Manage Your Cash Flow Easily In One Click!
        </h2>
        <button
          className="btn hover:bg-primary"
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