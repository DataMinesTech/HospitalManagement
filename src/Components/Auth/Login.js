import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
const Login = ({ history }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const dispatch = useDispatch();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("login form submitted");
    history.push("/home");
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
