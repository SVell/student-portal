import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const LoginComponent = () => {
  const [password, setPassword] = useState("Password");
  const [visible, setVisible] = useState(true);

  return (
    <Login>
      <div className="login">
        <h2>Login</h2>
        <h4>Enter your account details</h4>
        <form>
          <div className="username">
            <input value="Username" type="text" placeholder="Username"></input>
            <div className="line"></div>
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
            <div className="line"></div>
          </div>
          <p>Forgot Password?</p>
          <button>Login</button>
        </form>
        <div className="sing-up">
          <p>Don't Have an account?</p>
          <button>Sign Up</button>
        </div>
      </div>
    </Login>
  );
};

const Login = styled(motion.div)`
  height: 50%;
  width: 70%;
`;

export default LoginComponent;
