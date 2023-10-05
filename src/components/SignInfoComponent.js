import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

export const SingInfoComponent = ({ info }) => {
  return (
    <SignInfo>
      <h4 className="info">{info}</h4>
    </SignInfo>
  );
};

export const SignInfo = styled(motion.div)`
  h4 {
    font-weight: 300;
  }
  .info {
    color: rgba(255, 255, 255, 0.75);
  }

  .error {
    color: rgba(255, 35, 35, 0.75);
  }
`;
