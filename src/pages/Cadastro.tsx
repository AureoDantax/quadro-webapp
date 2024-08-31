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
import { enviarDadosCadastro } from '../services/api';
import { useNavigateToLogin } from '../hooks/useNavigateToLogin';
import Spinner from '../components/SpinnerStyle';

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
  const [cpf, setCpf] = useState<string>(''); //aparentemente ele não pode estar vazio, então coloquei uma string vazia para usar mascara
  const [telefone, setTelefone] = useState<string>(''); //aparentemente ele não pode estar vazio, então coloquei uma string vazia
  const [instituicao, setInstituicao] = useState<string>('senacsantoamaro');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [confirmaSenha, setConfirmaSenha] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const { goToLogin } = useNavigateToLogin();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const modalRef = useRef<HTMLDialogElement>(null);


  // função copiada da internet pois também não fazia ideia de como usar mascaras em inputs
  const formatTelefone = (value: string) => {
    if (!value) return value;
    const telefone = value.replace(/\D/g, '');
    const match = telefone.match(/^(\d{2})(\d{1})(\d{4})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}-${match[4]}`;
    }
    return telefone;
  };

  // função copiada da internet pois também não fazia ideia de como usar mascaras em inputs
  const formatCpf = (value: string) => {
    if (!value) return value;
    const cpf = value.replace(/\D/g, '');
    const match = cpf.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
    if (match) {
      return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
    }
    return cpf;
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      setTelefone(formatTelefone(value));
    }
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      setCpf(formatCpf(value));
    }
  };

  // No handle você precisa passar ASYNC pra declarar que é uma função assíncrona (funções que demoram pra concluir, sabe?)
  // então toda vez que for usar um try catch você provavelmente vai usar await pra esperar a resposta de algo e precisa passar async na função
  // geralmente funções que demoram é chamadas de rede ou leitura e escrita de arquivos (qualquer coisa q envolva entrada e saida basicamente)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome || !sobrenome || !email || !senha || !confirmaSenha || (userType === 'professor' && (!cpf || !telefone))) {
      setErrorMessage('Preencha todos os campos obrigatórios.');
      modalRef.current?.showModal();
      return;
    }

    if (userType === 'professor' && cpf.length !== 14) {
      setErrorMessage('O CPF deve ter 11 dígitos.');
      modalRef.current?.showModal();
      return;
    }

    if (userType === 'professor' && telefone.length !== 16) {
      setErrorMessage('O número de telefone deve ter 11 dígitos.');
      modalRef.current?.showModal();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Por favor, insira um e-mail válido.');
      modalRef.current?.showModal();
      return;
    }

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
    setIsLoading(true); // vou colocar um loading pra mostrar que tá enviando os dados (só por causa desse await :')
    // cometi o erro de colocar ele antes das validações antes, então ele ficava rodando mesmo se tiver erro
    const formData = {
      nome,
      sobrenome,
      cpf: userType === 'professor' ? cpf : undefined,
      telefone: userType === 'professor' ? telefone : undefined,
      instituicao,
      email,
      senha
    };

    // e como falei, declarei async na função e uso o await no try catch (que é pra esperar a resposta da requisição)
    // como se fosse uma pausa no código até a resposta chegar
    // então é try(tente) enviar os dados do formulário e catch(capturar) um erro caso tenha falha no envio, sacou?
    // ctrl + click no enviarDadosCadastro pra ver o que o axios faz com o formData
    try {
      const response = await enviarDadosCadastro(formData);
      console.log('Dados enviados com sucesso:', response.data);
      setErrorMessage('Cadastro realizado com sucesso!');
      modalRef.current?.showModal();
      goToLogin(); // se der certo, manda o caba pra página de login
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      setErrorMessage('Erro ao enviar dados. Tente novamente mais tarde.');
      modalRef.current?.showModal();
    } finally {
      setIsLoading(false); // tanto faz se der certo ou errado essa bomba, o loading tem que desligar
    }
  };
  // NÃO CONSIGO FAZER O TESTE DESSA BOMBA DE FUNÇÃO POIS NÃO TENHO ACESSO AO BACKEND, MAS A LÓGICA APARENTEMENTE ESTÁ CERTA
  // SE TIVER ALGUM ERRO, ME AVISE! E LEMBRANDO QUE NÃO CONSIGO COMENTAR DENTRO DO RETURN POR ISSO N TEM NADA.
  return (
    <>
      <GlobalStyleCreate />
      <CadastroDiv>
      {isLoading && <Spinner />}
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
                  <InputStyle placeholder="Insira seu CPF" value={cpf} onChange={handleCpfChange} maxLength={14}/>
                  <LeftLabel>Número de telefone</LeftLabel>
                  <InputStyle placeholder="Insira seu número" value={telefone} onChange={handleTelefoneChange} maxLength={15}/>
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
              <LargeButtonStyle type='submit' onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? 'Enviando...' : 'Cadastre-se'}
              </LargeButtonStyle>
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
