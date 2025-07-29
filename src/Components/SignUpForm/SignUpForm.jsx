import React, { useState } from "react";
import email from "../../assets/signup/email.png";
import password from "../../assets/signup/password.png";
import person from "../../assets/signup/person.png";
import "./signupform.css";

const SignUpForm = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <h1 className="text">{action}</h1>
        <span className="underline"></span>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <> </>
        ) : (
          <>
            {" "}
            <div className="input">
              <img src={person} alt="name" className="inputIcon" />
              <input type="text" placeholder="Name" className="inputField" />
            </div>
          </>
        )}

        <div className="input">
          <img src={email} alt="email" className="inputIcon" />
          <input type="email" placeholder="Email" className="inputField" />
        </div>
        <div className="input">
          <img src={password} alt="password" className="inputIcon" />
          <input
            type="password"
            placeholder="password"
            className="inputField"
          />
        </div>
      </div>
      <div className="submitForm">
        <button
          type="submit"
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Signup
        </button>
        <button
          type="submit"
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
