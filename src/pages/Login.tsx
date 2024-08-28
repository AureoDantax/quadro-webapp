import ButtonStyle from "../components/ButtonStyle";
import LoginDiv from "../components/LoginPanel";
import Logologin from "../components/LogoQuadro";
import InputStyle from "../components/InputStyle";
import { createGlobalStyle } from 'styled-components';
import { OuLabel, StyledLabel } from "../components/LoginLabel";

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

export function Login() {
  return (
    <>
      <GlobalStyleCreate />
      <LoginDiv>
        <Logologin />
        <StyledLabel>E-mail</StyledLabel>
        <InputStyle placeholder="Insira seu e-mail" />
        <StyledLabel>Senha</StyledLabel>
        <InputStyle type="password" placeholder="Insira sua senha" />
        <ButtonStyle>Entrar</ButtonStyle>
        <OuLabel>ou</OuLabel>
        <ButtonStyle>Cadastre-se</ButtonStyle>
      </LoginDiv>
    </>
  )
}