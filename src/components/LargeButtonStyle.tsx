import React, { ReactNode, MouseEventHandler } from 'react';
import styled from 'styled-components';

interface ButtonStyleProps {
    type?: 'button' | 'submit' | 'reset';
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
    disabled?: boolean;
}

const Button = styled.button`
    align-self: center;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
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

const LargeButtonStyle: React.FC<ButtonStyleProps> = ({ children, type = 'button', onClick, disabled }) => {
    return (
        <Button type={type} onClick={onClick} disabled={disabled}>
            {children}
        </Button>
    );
}

export default LargeButtonStyle;
