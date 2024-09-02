import LargeButtonStyle from "../components/LargeButtonStyle";
import LoginDiv from "../components/LoginPanel";
import Logologin from "../components/LogoQuadro";
import InputStyle from "../components/InputStyle";
import { LeftLabel } from "../components/LoginLabel";
import DisableZoom from "../components/DisableZoom";

export function Login() {
  return (
    <>
      <LoginDiv>
        <DisableZoom />
        <Logologin />
        <LeftLabel>E-mail</LeftLabel>
        <InputStyle placeholder="Insira seu e-mail" />
        <LeftLabel>Senha</LeftLabel>
        <InputStyle type="password" placeholder="Insira sua senha" />
        <LargeButtonStyle>Entrar</LargeButtonStyle>
      </LoginDiv>
    </>
  )
}