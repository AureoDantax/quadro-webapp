import React, { ReactNode } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/background-image.jpg';

const CadastroContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  height: auto;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 30px;
  background: #FFF;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.10);
  margin: 20px;

  form {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    & > div {
      display: flex;
      flex-direction: column;
      width: 48%;
      max-width: 425px;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
    form {
      flex-direction: column;

      & > div {
        width: 100%;
        max-width: 100%;
      }
    }
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

interface CadastroDivProps {
  children: ReactNode;
}

const CadastroPanel: React.FC<CadastroDivProps> = ({ children }) => {
  return (
    <BackgroundContainer>
      <CadastroContainer>
        {children}
      </CadastroContainer>
    </BackgroundContainer>
  );
}

export default CadastroPanel;