import ButtonStyle from "../components/ButtonStyle";
import InputStyle from "../components/InputStyle";
import { createGlobalStyle } from 'styled-components';
import { AltnameLabel, ConfirmPasswordLabel, EmailLabel, SenhaLabel, UsernameLabel } from "../components/LoginLabel";
import CadastroDiv from "../components/CadastroPanel";

const GlobalStyleCreate = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
`;

export function Cadastro() {
    return (
        <>
            <GlobalStyleCreate />
            <CadastroDiv>
                <UsernameLabel>Nome</UsernameLabel>
                <InputStyle placeholder="Insira seu nome"/>
                <AltnameLabel>Sobrenome</AltnameLabel>
                <InputStyle placeholder="Insira seu sobrenome"/>
                <EmailLabel>E-mail</EmailLabel>
                <InputStyle placeholder="Insira seu e-mail"/>
                <SenhaLabel>Senha</SenhaLabel>
                <InputStyle type="password" placeholder="Insira sua senha"/>
                <ConfirmPasswordLabel>Confirme sua senha</ConfirmPasswordLabel>
                <InputStyle type="password" placeholder="Confirme sua senha"/>
                <ButtonStyle>Cadastre-se</ButtonStyle>
            </CadastroDiv>
        </>
    )
}