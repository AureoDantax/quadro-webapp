import { useState, useRef } from 'react';
import LargeButtonStyle from "../components/LargeButtonStyle";
import InputStyle from "../components/InputStyle";
import { createGlobalStyle } from 'styled-components';
import { CenterLabel, LeftLabel } from "../components/LoginLabel";
import CadastroDiv from "../components/CadastroPanel";
import UserTypeSelector from '../components/UserTypeStyle';
import SelectStyle from '../components/SelectStyle';
import styled from 'styled-components';
import ModalDialog from '../components/ModalDialog';

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

const FormContainer = styled.div`  /* Falhei em tentar colocar a separação de colunas no container do cadastro então deixei aqui msm.*/
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`;

export function Cadastro() {
  const [userType, setUserType] = useState<'aluno' | 'professor'>('aluno');
  const [nome, setNome] = useState<string>('');
  const [sobrenome, setSobrenome] = useState<string>('');
  const [cpf, setCpf] = useState<string>();
  const [telefone, setTelefone] = useState<string>();
  const [instituicao, setInstituicao] = useState<string>('senacsantoamaro');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [confirmaSenha, setConfirmaSenha] = useState<string>('');

  /* Isso aqui eu peguei no gepeto pois queria que permitisse apenas números e também não sabia como :') */
  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setCpf(value);
  };

  /* Isso aqui eu peguei no gepeto pois queria que permitisse apenas números e também não sabia como :') */
  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setTelefone(value);
  };

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (senha !== confirmaSenha) {
      setErrorMessage('As senhas não coincidem.');
      modalRef.current?.showModal();
      return;
    }

    if (senha.length < 8) {
      setErrorMessage('A senha deve ter pelo menos 8 caracteres.');
      modalRef.current?.showModal();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Por favor, insira um e-mail válido.');
      modalRef.current?.showModal();
      return;
    }

    const formData = {
      nome,
      sobrenome,
      cpf: userType === 'professor' ? cpf : undefined,
      telefone: userType === 'professor' ? telefone : undefined,
      instituicao,
      email,
      senha
    };

    console.log(formData);
    /* Aqui é aonde vou mandar pro back e não fiz pois não faço ideia de como fazer e como usar AXIOS :). */
  };

  return (
    <>
      <GlobalStyleCreate />
      <CadastroDiv>
        <form onSubmit={handleSubmit}>
          <UserTypeSelector userType={userType} setUserType={setUserType} />
          <FormContainer>
            <Column>
              <LeftLabel>Nome</LeftLabel>
              <InputStyle placeholder="Insira seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
              <LeftLabel>Sobrenome</LeftLabel>
              <InputStyle placeholder="Insira seu sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
              {userType === 'professor' && (
                <>
                  <LeftLabel>CPF</LeftLabel>
                  <InputStyle placeholder="Insira seu CPF" value={cpf} onChange={handleCpfChange} />
                  <LeftLabel>Número de telefone</LeftLabel>
                  <InputStyle placeholder="Insira seu número" value={telefone} onChange={handleTelefoneChange} />
                </>
              )}
              <LeftLabel>Instituição de Ensino</LeftLabel>
              <SelectStyle value={instituicao} onChange={(e) => setInstituicao(e.target.value)}>
                <option value="senacsantoamaro">SENAC (Centro Universitário Santo Amaro)</option>
                <option value="senacitaquera">SENAC Itaquera</option>
                <option value="senacsaomiguel">SENAC S.Miguel</option>
              </SelectStyle>
            </Column>
            <Column>
              <LeftLabel>E-mail</LeftLabel>
              <InputStyle placeholder="Insira seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
              <LeftLabel>Senha</LeftLabel>
              <InputStyle type="password" placeholder="Insira sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
              <LeftLabel>Confirme sua senha</LeftLabel>
              <InputStyle type="password" placeholder="Confirme sua senha" value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} />
              <LargeButtonStyle type='submit'>Cadastre-se</LargeButtonStyle>
            </Column>
          </FormContainer>
        </form>
        <ModalDialog ref={modalRef} onClose={() => modalRef.current?.close()}>
          <CenterLabel>{errorMessage}</CenterLabel>
        </ModalDialog>
      </CadastroDiv>
    </>
  );
}
