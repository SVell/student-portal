import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import RegisterComponent from "../components/RegisterComponent";
import LoginComponent from "../components/LoginComponent";

import students from "../img/students.png";
import vectorTop from "../img/VectorTop.svg";
import vectorTopBack from "../img/VectorTopBack.svg";
import vectorLeft from "../img/VectorLeft.svg";
import vectorBottom from "../img/VectorBottom.svg";

const AuthPage = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[1];
  console.log(pathId);

  return (
    <Auth>
      <AuthLogic>
        {pathId === "login" ? <LoginComponent /> : <RegisterComponent />}
      </AuthLogic>
      <Art>
        <FG>
          <StudentText>
            <h1>
              <span>Welcome to</span>
            </h1>
            <h1>student portal</h1>
            <p>Login to access your account</p>
          </StudentText>
          <img src={students} alt="students"></img>
        </FG>
        <BG>
          <img src={vectorTop} alt="vectorTop" className="vectorTop"></img>
          <img
            src={vectorTopBack}
            alt="vectorTopBack"
            className="vectorTopBack"
          ></img>
          <img src={vectorLeft} alt="vectorLeft" className="vectorLeft"></img>
          <img
            src={vectorBottom}
            alt="vectorBottom"
            className="vectorBottom"
          ></img>
        </BG>
      </Art>
    </Auth>
  );
};

const Auth = styled(motion.div)`
  background: #925fe2;
  height: 100vh;
  display: flex;
`;

const AuthLogic = styled(motion.div)`
  background: #1c1d21;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Art = styled(motion.div)`
  width: 100%;
  position: relative;
`;

const BG = styled(motion.div)`
  img {
    z-index: 1;
    position: absolute;
  }
`;

const FG = styled(motion.div)`
  z-index: 2;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  img {
    margin-bottom: 1rem;
  }
  h1,
  p {
    color: white;
  }
  h1 {
    font-weight: 700;
    font-size: 6vh;
    line-height: 3.5rem;
  }
  p {
    padding-top: 1rem;
  }
`;

const StudentText = styled(motion.div)``;

export default AuthPage;
