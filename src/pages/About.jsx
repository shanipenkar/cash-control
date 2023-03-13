import React, {useContext} from 'react'
import "../shared/styles.css";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../LoginContext";

const About = () => {
  const history = useHistory();
    const { isLoggedIn, setIsLoggedIn} = useContext(LoginContext);
  return (
    <>
    <div className="pt-10 mx-20">
      <h1 className="font-extrabold text-center text-6xl font-neucha text-white w-full">
        About
      </h1>
      <p className="text-lg text-textColor w-full my-5">
      The Cash Flow Project is a dynamic personal finance tool designed to simplify your financial management process. With this app, you can easily keep track your incomes, expenses, and savings.
Whether you're a student, a professional, or a freelancer, this tool is intended to help you make informed financial decisions and achieve your financial goals.

      </p>{" "}

      <p className="text-lg text-textColor w-full my-5">
      As a computer science graduate and a Udemy Fullstack Bootcamp certificate holder, I leveraged my knowledge in web development to build this project. The Cash Flow Project is created using the latest web technologies, including React, Node.js, Express.js, and MongoDB, to provide you with a user-friendly experience.
        </p>{" "}


        <p className="text-lg text-textColor w-full my-5">
        By using this app, you'll gain insights into your spending habits, develop better budgeting strategies, and reach your financial objectives. The Cash Flow Project is designed to empower you to take control of your finances. Give it a try and start taking control of your financial future today!
        </p>{" "}
    </div>
    <div className='text-center'>
    <button
          className="btn bg-black text-white w-1/4 mx-auto "
          onClick={() => {
            isLoggedIn? history.push("/cashflow"): history.push("/auth");
          }}
        >Let's Start !</button>
    </div>
    </>
  );
};

export default About;
