import React, { ReactNode } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/background-image.jpg';

const CadastroContainer = styled.div`
  padding-left: 75px;
  padding-right: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  height: 730px;
  border-radius: 30px;
  background: #FFF;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.10);
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

const CadastroDiv: React.FC<CadastroDivProps> = ({ children }) => {
    return (
        <>
            <BackgroundContainer>
                <CadastroContainer>
                    {children}
                </CadastroContainer>
            </BackgroundContainer>
        </>
    );
}

export default CadastroDiv;
