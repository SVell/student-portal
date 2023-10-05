import React from "react";
import { useNavigate } from "react-router";

import styled from "styled-components";
import { motion } from "framer-motion";

import { SubSignButton } from "../styles";

const FormTransitonComponent = ({ navigateTo, text, buttonText }) => {
  const navigate = useNavigate();

  return (
    <FormTransition>
      <p>{text}</p>
      <SubSignButton onClick={() => navigate(navigateTo)}>
        {buttonText}
      </SubSignButton>
    </FormTransition>
  );
};

export const FormTransition = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30%;
  padding-right: 10%;
  height: 5vh;
  font-size: 1.5vh;

  p {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export default FormTransitonComponent;
