import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "./components/img/logo.png";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignupForm";
import MessageContext from "./components/templates/MessageContext";
function UserLoG(props) {
  let ctx = useContext(MessageContext);
  return (
    <div className="Login-main">
      <div className="box">
        <div className="header-Log">
          <img src={logo} alt="not load" />
          <div className="h-data">
            <Link to="/" className="logo_name">
              {ctx.Title}
            </Link>
            {props.Login ? <h5>Welcome back!</h5>:<h5>Create Account</h5>  }
          </div>
        </div>
        {props.Login ? <LoginForm /> : <SignUpForm />}
        <div className="or">
          <div className="desd"></div>
          <span className="osr">OR</span>
          <div className="desd"></div>
        </div>
        <div className="box1_bottm">
          {props.Login ? (
            <>
              <span className="crea">Don't have accout? </span>
              <Link to="/signup" className="sign_up">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <span className="crea">Alredy have Account? </span>
              <Link to="/login" className="sign_up">
                Log In
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserLoG;