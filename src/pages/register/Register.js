
import React, { useRef } from "react";
import "./Register.css";
import {useNavigate} from "react-router";
import axios from "axios";

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value){
      passwordAgain.current.setCustomValidity("Password don't match!!!");
    } else{
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try{
        await axios.post("/auth/register", user);
        navigate("/login");
      }catch(err){
        console.log(err);
      }
    }
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Chatter</h3>
          <span className="loginDesc">
            Chat with Friends and Make life Happy.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              ref={username}
              type="text"
              className="loginInput"
              required
            />
            <input
              placeholder="Email"
              ref={email}
              type="email"
              className="loginInput"
              required
            />
            <input
              placeholder="Enter Your Password"
              minLength={6}
              ref={password}
              type="password"
              className="loginInput"
              required
            />
            <input
              placeholder="Enter Your Password Again"
              minLength={6}
              ref={passwordAgain}
              type="password"
              className="loginInput"
              required
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton" >Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
