import styled from 'styled-components';
import SmallButtonStyle from './SmallButtonStyle';
import React, { forwardRef } from 'react';

interface DialogProps {
    children: React.ReactNode;
    onClose: () => void;
}

const Dialog = styled.dialog`
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 357px;
    height: 157px;
    padding: 20px;
    border: none;
    border-radius: 30px;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.10);
    background-color: white;
    transform: translate(-50%, -50%);
    text-align: center;

    &[open] {
        display: block;
    }

    button {
        margin: 0 auto;
        display: block;
    }
`;
    // Essa merda de forwardRef é complicada, ví exemplo em um vídeo e sei que envolve referencia de elementos DOM personalizados
    // Então não faço ideia de como funciona porém achei útil usar então ta ai, mais um componente bão pra usar
    // Deixando claro que PRECISA dele para o componente pai poder abrir e fechar o modal.
const ModalDialog = forwardRef<HTMLDialogElement, DialogProps>(({ children, onClose }, ref) => (
    <Dialog ref={ref}>
        {children}
        <SmallButtonStyle onClick={onClose}>Fechar</SmallButtonStyle>
    </Dialog>
));

export default ModalDialog;
