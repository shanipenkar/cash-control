import { Document } from "mongoose";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../LoginContext";

const AuthenticationForm = ({ type }) => {
  const { setIsLoggedIn, setLoggedUser } = useContext(LoginContext);
  const history = useHistory();
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [authRes, setAuthRes] = useState({ status: "", msg: "" });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const clearInputs = (whatToClear) => {
    if (whatToClear === "password") {
      setUser({
        ...user,
        password: "",
        passwordConfirm: "",
      });
    } else {
      setUser({
        fullName: "",
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
      });
    }
  };

  const register = () => {
    setAuthRes({ status: "", msg: "" });
    if (user.password !== user.passwordConfirm) {
      setAuthRes({ status: "Error:", msg: "Passwords do not match!" });
      clearInputs("password");
    } else {
      fetch("http://localhost:5000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: user.fullName,
          email: user.email,
          username: user.username,
          password: user.password,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setAuthRes({ status: data.status, msg: data.message });
          console.log(data.userId);
          if (data.status === "Success:") {
            setIsLoggedIn(true);
            setLoggedUser({ id: data.userId, ...user });
            setTimeout(() => {
              history.push("/cashflow");
            }, 3000);
          }
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
          console.log("Error:", error.message);
        });
      clearInputs("all");
    }
  };

  const login = () => {
    setAuthRes({ status: "", msg: "" });
    fetch("http://localhost:5000/users/login", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAuthRes({ status: data.status, msg: data.message });
        if (data.status === "Success:") {
          setIsLoggedIn(true);
          setLoggedUser({ id: data.userId, ...user });
          setTimeout(() => {
            history.push("/cashflow");
          }, 3000);
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        console.log("Error:", error.message);
      });
    clearInputs("all");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === "Login") {
      login();
    } else {
      register();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      handleSubmit(e);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center bg-gray-100 rounded-lg py-6">
        <form
          className="w-2/3 p-2 border border-gray-400 rounded pb-3 form"
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
        >
          {type === "Register" ? (
            <>
              <div className="mb-2">
                <label className="block text-black text-xs font-medium">
                  Full Name:
                </label>
                <input
                  type="text"
                  required
                  autoComplete="off"
                  onChange={handleChange}
                  name="fullName"
                  value={user.fullName}
                  className="w-full px-2 py-1 my-1 text-xs border border-gray-400 rounded"
                />
              </div>
              <div className="mb-2">
                <label className="block text-xs text-black font-medium">
                  Email:
                </label>
                <input
                  type="email"
                  required
                  autoComplete="off"
                  onChange={handleChange}
                  name="email"
                  value={user.email}
                  className="w-full px-2 py-1 my-1 text-xs border border-gray-400 rounded"
                />
              </div>
            </>
          ) : null}
          <div className="mb-2">
            <label className="block text-xs text-black font-medium">
              Username:
            </label>
            <input
              type="text"
              required
              autoComplete="off"
              onChange={handleChange}
              name="username"
              value={user.username}
              className="w-full px-2 py-1 my-1 text-xs border border-gray-400 rounded"
            />
          </div>
          <div className="mb-2">
            <label className="block text-xs text-black font-medium">
              Password:
            </label>
            <input
              type="password"
              required
              autoComplete="off"
              onChange={handleChange}
              name="password"
              value={user.password}
              className="w-full px-2 py-1 my-1 text-xs border border-gray-400 rounded"
            />
          </div>
          {type === "Register" ? (
            <div className="mb-2">
              <label className="block text-xs text-black font-medium">
                Confirm Password:
              </label>
              <input
                type="password"
                required
                autoComplete="off"
                onChange={handleChange}
                name="passwordConfirm"
                value={user.passwordConfirm}
                className="w-full px-2 py-1 my-1 text-xs border border-gray-400 rounded"
              />
            </div>
          ) : null}
          <button
            type="submit"
            value="Submit"
            className="bg-black big-btn w-full mt-2 p-1 text-white rounded"
          >
            {type}
          </button>
        </form>
      </div>
      <div>
        <p
          className={`pt-2 text-center ${
            authRes.status === "Success:" ? "text-green-500" : "text-red-500"
          }`}
        >
          {authRes.msg}
        </p>
        {authRes.status === "Success:" ? (
          <p className="text-center text-green-500">Redirecting...</p>
        ) : null}
        {authRes.status === "Error:" ? (
          <p className="text-center text-red-500">Please try again!</p>
        ) : null}
      </div>
    </>
  );
};

export default AuthenticationForm;
