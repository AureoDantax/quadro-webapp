import React, { ReactNode, MouseEventHandler } from 'react';
import styled from 'styled-components';

interface ButtonStyleProps {
    type?: 'button' | 'submit' | 'reset';
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
}

const Button = styled.button`
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    justify-self: center;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 157px;
    height: 50px;
    flex-shrink: 0;
    background-color: #FFA800;
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-size: 24px;

    &:focus {
        outline: none;
    }

    &:active {
        background-color: #FF8800;
        transform: scale(0.95);
    }
`;

const SmallButtonStyle: React.FC<ButtonStyleProps> = ({ children, type = 'button', onClick}) => {
    return (
        <Button type={type} onClick={onClick}>
            {children}
        </Button>
    );
}

export default SmallButtonStyle;
