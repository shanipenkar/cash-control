import React from 'react'
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const History = useHistory();
  return (
    <>
    <h1 className='font-bold'>404 Not Found</h1>
    <button
          className="text-white bg-[#B7B78A] hover:bg-[#bdbd9b] font-normal mt-3 text-xs px-4 py-2 rounded-md"
          onClick={() => {
            History.push("/");
          }}
        >
          Back To Home Page
        </button>
        </>
  )
}

export default NotFound