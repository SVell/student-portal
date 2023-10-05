import styled from "styled-components";
import { motion } from "framer-motion";

export const InputField = styled(motion.input)`
  margin: 1vh 0 0 0;
  width: 100%;
  border: none;
  background-color: #1c1d21;
  color: rgba(255, 255, 255, 0.5);
  font-size: 2vh;

  &:focus {
    outline-width: 0;
  }
`;

export const MainSignButton = styled(motion.button)`
  margin-top: 5vh;
  width: 100%;
  height: 6vh;
  border-radius: 1.5vh;
  border: none;
  background: #9c6fe4;
  color: white;
  font-size: 2vh;
  cursor: pointer;
`;

export const SubSignButton = styled(motion.button)`
  height: 100%;
  width: 12vh;
  border-radius: 0.8vh;
  border: none;
  background: #333437;
  color: white;
  cursor: pointer;
`;

export const Form = styled(motion.form)`
  padding-top: 2vh;
  font-size: 2vh;

  p {
    margin-top: 3vh;
  }

  .password {
    display: flex;
  }
`;
