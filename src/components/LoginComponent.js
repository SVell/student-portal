import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { MainSignButton, InputField, Form } from "../styles";
import { EyeComponent } from "./EyeComponent";
import { LineComponent } from "./LIneComponent";
import { SingInfoComponent } from "./SignInfoComponent";
import FormTransitonComponent from "./FormTransitonComponent";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(true);
  const [info, setInfo] = useState("Enter your account details");

  return (
    <Login>
      <h2>Login</h2>
      <SingInfoComponent info={info} setInfo={setInfo} />
      <LoginForm>
        <div className="username">
          <InputField
            value={username}
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          ></InputField>
          <LineComponent />
        </div>
        <div className="password">
          <InputField
            value={password}
            type={visible ? "text" : "password"}
            id="passwordInput"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></InputField>
          <EyeComponent visible={visible} setVisible={setVisible} />
        </div>
        <LineComponent />
        <p>Forgot Password?</p>
        <MainSignButton>Login</MainSignButton>
      </LoginForm>
      <FormTransitonComponent
        navigateTo="/register"
        text="Don't have an account?"
        buttonText="Sign Up"
      />
    </Login>
  );
};

const Login = styled(motion.div)`
  h2 {
    font-size: 5vh;
  }
`;

const LoginForm = styled(Form)`
  p {
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }
`;

export default LoginComponent;
