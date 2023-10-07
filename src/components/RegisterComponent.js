import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { MainSignButton, SubSignButton, InputField, Form } from "../styles";
import { LineComponent } from "./LIneComponent";
import { EyeComponent } from "./EyeComponent";
import { SingInfoComponent } from "./SignInfoComponent";
import FormTransitonComponent from "./FormTransitonComponent";
import { fadeIn } from "../animations";
import { validateEmail } from "../utils";

const RegisterComponent = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [visible, setVisible] = useState(true);
  const [infoClassName, setInfoClassname] = useState("info");
  const [info, setInfo] = useState("Enter your account details");

  const register = (e) => {
    e.preventDefault();

    if (!checkForInputErrors()) return;

    if (username === "") {
      setInfoClassname("error");
      setInfo("Username cannot be empty");
    }
  };

  const checkInput = () => {};

  useEffect(() => {
    if (validateEmail(email) || email === "") {
      setInfoClassname("info");
      setInfo("Enter your account details");
      checkForInputErrors();
    } else {
      setInfoClassname("error");
      setInfo("Email is not valid");
    }
  }, [email]);

  useEffect(() => {
    if (password === repeatPassword) {
      setInfoClassname("info");
      setInfo("Enter your account details");
      checkForInputErrors();
    } else {
      setInfoClassname("error");
      setInfo("Passwords do not match");
    }
  }, [password, repeatPassword]);

  const checkForInputErrors = () => {
    if (password !== repeatPassword) {
      setInfoClassname("error");
      setInfo("Passwords do not match");
      return false;
    } else if (!validateEmail(email) && email !== "") {
      setInfoClassname("error");
      setInfo("Email is not valid");
      return false;
    } else {
      setInfoClassname("info");
      setInfo("Enter your account details");
      return true;
    }
  };

  return (
    <Register variants={fadeIn} initial="hidden" animate="show">
      <motion.h2>Register</motion.h2>
      <SingInfoComponent infoClassName={infoClassName} info={info} />
      <Form>
        <div className="username">
          <InputField
            value={username}
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          ></InputField>
        </div>
        <LineComponent />
        <div className="email">
          <InputField
            value={email}
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></InputField>
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
        <MainSignButton onClick={(e) => register(e)}>Register</MainSignButton>
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
