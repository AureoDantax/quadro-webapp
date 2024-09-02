import React, { ReactNode } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/background-image.jpg';

const LoginContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  height: auto;
  border-radius: 30px;
  background: #FFF;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.10);

  @media (max-width: 426px) {
    padding: 20px;
    flex-direction: column;
    margin: 10px;
    width: 70vh;
    max-width: 70vh;
  }
`;

const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;

interface LoginDivProps {
    children: ReactNode;
}

const LoginDiv: React.FC<LoginDivProps> = ({ children }) => {
    return (
        <>
            <BackgroundContainer>
                <LoginContainer>
                    {children}
                </LoginContainer>
            </BackgroundContainer>
        </>
    );
}

export default LoginDiv;
