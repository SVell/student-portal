import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

export const LineComponent = () => {
  return <Line />;
};

const Line = styled(motion.div)`
  margin: 0.5vh 0 0.5vh 0;
  height: 0.1rem;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
`;
