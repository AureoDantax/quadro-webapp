import React, { useState, useRef } from 'react';
import { useNavigateToHome } from '../hooks/useNavigateToHome';
import LargeButtonStyle from "../components/LargeButtonStyle";
import LoginPanel from "../components/LoginPanel";
import Logologin from "../components/LogoQuadro";
import InputStyle from "../components/InputStyle";
import { verificarDadosLogin } from '../services/api';
import { CenterLabel, LeftLabel } from "../components/LoginLabel";
import Spinner from '../components/SpinnerStyle';
import ModalDialog from '../components/ModalDialog';
import DisableZoom from "../components/DisableZoom";

export function Login() {
  const [login, setLogin] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const modalRef = useRef<HTMLDialogElement>(null);
  const { goToHome } = useNavigateToHome();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    const formData = {
      login,
      senha
    };

    try {
      const response = await verificarDadosLogin(formData);
      console.log('Logado com sucesso:', response.data);
      goToHome();
    } catch (error) {
      console.error('Erro ao confirmar dados:', error);
      setErrorMessage('E-mail ou Senha invalida! Tente novamente.');
      modalRef.current?.showModal();
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <LoginPanel>
        <DisableZoom />
        {isLoading && <Spinner />}
        <form onSubmit={handleSubmit}>
          <Logologin />
          <LeftLabel>E-mail</LeftLabel>
          <InputStyle
            placeholder="Insira o e-mail"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
          <LeftLabel>Senha</LeftLabel>
          <InputStyle
            type="password"
            placeholder="Insira a senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <LargeButtonStyle type='submit' disabled={isLoading}>
            {isLoading ? 'Entrando...' : 'Entrar'}
          </LargeButtonStyle>
        </form>
        <ModalDialog ref={modalRef} onClose={() => modalRef.current?.close()}>
          <CenterLabel>{errorMessage}</CenterLabel>
        </ModalDialog>
      </LoginPanel>
    </>
  )
}