import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Button = styled.button`
align-self: center;
margin-top: 10px;
margin-bottom: 10px;
width: 457px;
height: 60px;
flex-shrink: 0;
background-color: #FFA800;
color: white;
border: none;
border-radius: 30px;
cursor: pointer;
font-size: 24px;

&:focus {
    outline: none; /* Remove o contorno padrão ao focar */
  }

&:active {
    background-color: #FF8800; /* Cor de fundo ao clicar */
    transform: scale(0.95); /* Um leve efeito de redução no tamanho para dar a sensação de clique */
  }
`;

interface ButtonStyleProps {
    children: ReactNode;
}

const ButtonStyle: React.FC<ButtonStyleProps> = ({ children })=> {
    return (
        <>
            <Button>
            {children}
            </Button>
        </>
    );
}

export default ButtonStyle;