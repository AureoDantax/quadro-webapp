import LargeButtonStyle from "../components/LargeButtonStyle";
import LoginDiv from "../components/LoginPanel";
import Logologin from "../components/LogoQuadro";
import InputStyle from "../components/InputStyle";
import { CenterLabel, LeftLabel } from "../components/LoginLabel";
import { useNavigateToCadastro } from '../hooks/useNavigateToCadastro';
import DisableZoom from "../components/DisableZoom";

export function Login() {
  const { goToCadastro } = useNavigateToCadastro();
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
        <CenterLabel>ou</CenterLabel>
        <LargeButtonStyle onClick={goToCadastro}>Cadastre-se</LargeButtonStyle>
      </LoginDiv>
    </>
  )
}