import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import show from "../img/show.png";
import hide from "../img/hide.png";

export const EyeComponent = ({ visible, setVisible }) => {
  return (
    <EyeImage
      src={visible ? hide : show}
      alt="eye"
      onClick={() => setVisible(!visible)}
    />
  );
};

const EyeImage = styled(motion.img)`
  color: white;
  width: 7%;
  height: 7%;
  margin: 1vh 1vh 0vh 0;
  cursor: pointer;
`;
