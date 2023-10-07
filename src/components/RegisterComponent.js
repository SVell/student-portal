import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { MainSignButton, SubSignButton, InputField, Form } from "../styles";
import { LineComponent } from "./LIneComponent";
import { EyeComponent } from "./EyeComponent";
import { SingInfoComponent } from "./SignInfoComponent";
import FormTransitonComponent from "./FormTransitonComponent";
import { fadeIn } from "../animations";

const RegisterComponent = () => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [visible, setVisible] = useState(true);
  const [info, setInfo] = useState("Enter your account details");

  return (
    <Register variants={fadeIn} initial="hidden" animate="show">
      <motion.h2>Register</motion.h2>
      <SingInfoComponent info={info} setInfo={setInfo} />
      <Form>
        <div className="username">
          <InputField value="" type="text" placeholder="Username"></InputField>
        </div>
        <LineComponent />
        <div className="email">
          <InputField value="" type="email" placeholder="Email"></InputField>
        </div>
        <LineComponent />
        <div className="password">
          <InputField
            value={password}
            type={visible ? "text" : "password"}
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></InputField>
          <EyeComponent visible={visible} setVisible={setVisible} />
        </div>
        <LineComponent />
        <div className="repeatPassword">
          <InputField
            value={repeatPassword}
            type={visible ? "text" : "password"}
            id="repeatPasswordInput"
            placeholder="Repeat password"
            onChange={(e) => setRepeatPassword(e.target.value)}
          ></InputField>
        </div>
        <LineComponent />
        <MainSignButton>Register</MainSignButton>
      </Form>
      <FormTransitonComponent
        navigateTo="/login"
        text="Already have an account?"
        buttonText="Sign In"
      />
    </Register>
  );
};

const Register = styled(motion.div)`
  h2 {
    font-size: 5vh;
  }
`;

export default RegisterComponent;
