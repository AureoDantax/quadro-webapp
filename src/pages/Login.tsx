import LargeButtonStyle from "../components/LargeButtonStyle";
import LoginDiv from "../components/LoginPanel";
import Logologin from "../components/LogoQuadro";
import InputStyle from "../components/InputStyle";
import { createGlobalStyle } from 'styled-components';
import { CenterLabel, LeftLabel } from "../components/LoginLabel";
import { useNavigateToCadastro } from '../hooks/useNavigateToCadastro';

const GlobalStyleCreate = createGlobalStyle` /* ESTILO GLOBAL, BOM UTILIZAR EM TODA PÁGINA */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }

  html {
    width: 100%;
    height: 100%;
  }
`;

export function Login() {
  const { goToCadastro } = useNavigateToCadastro();
  return (
    <>
      <GlobalStyleCreate />
      <LoginDiv>
        <Logologin />
        <LeftLabel>E-mail</LeftLabel>
        <InputStyle placeholder="Insira seu e-mail" />
        <LeftLabel>Senha</LeftLabel>
        <InputStyle type="password" placeholder="Insira sua senha" />
        <LargeButtonStyle>Entrar</LargeButtonStyle>
        <CenterLabel>ou</CenterLabel>
        <LargeButtonStyle onClick={goToCadastro}>Cadastre-se</LargeButtonStyle>
      </LoginDiv>
    </>
  )
}