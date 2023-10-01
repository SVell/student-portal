import React, { useState } from "react";

const Login = () => {
  const [password, setPassword] = useState("Password");
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <div className="login">
        <h2>Login</h2>
        <h4>Enter your account details</h4>
        <form>
          <div className="username">
            <input value="Username" type="text" placeholder="Username"></input>
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
        </form>
        <p>Forgot Password?</p>
        <button>Login</button>
        <div className="sing-up">
          <p>Don't Have an account?</p>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
