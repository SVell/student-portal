import React, { useState } from "react";

const Register = () => {
  const [password, setPassword] = useState("Password");
  const [repeatPassword, setRepeatPassword] = useState("Repeat Password");
  const [visible, setVisible] = useState(true);
  const [visibleRepeat, setVisibleRepeat] = useState(true);

  return (
    <div>
      <div className="register">
        <h2>Register</h2>
        <h4>Enter your details</h4>
        <form>
          <div className="username">
            <input value="Username" type="text" placeholder="Username"></input>
          </div>
          <div className="email">
            <input value="Email" type="email" placeholder="Email"></input>
          </div>
          <div className="password">
            <input
              value={password}
              type={visible ? "text" : "password"}
              id="passwordInput"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button>Eye</button>
          </div>
          <div className="repeat-password">
            <input
              value={repeatPassword}
              type={visibleRepeat ? "text" : "password"}
              id="passwordInput"
              placeholder="password"
              onChange={(e) => setRepeatPassword(e.target.value)}
            ></input>
            <button>Eye</button>
          </div>
        </form>
        <div className="sing-up">
          <p>Already have an account?</p>
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
