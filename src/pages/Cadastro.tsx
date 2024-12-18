import { useState, useRef } from 'react';
import LargeButtonStyle from "../components/LargeButtonStyle";
import InputStyle from "../components/InputStyle";
import { CenterLabel, LeftLabel } from "../components/LoginLabel";
import CadastroPanel from "../components/CadastroPanel";
import UserTypeSelector from '../components/UserTypeStyle';
import SelectStyle from '../components/SelectStyle';
import ModalDialog from '../components/ModalDialog';
import { enviarDadosCadastro } from '../services/api';
import { useNavigateToLogin } from '../hooks/useNavigateToLogin';
import Spinner from '../components/SpinnerStyle';
import DisableZoom from '../components/DisableZoom';

export function Cadastro() {
  const [tipoUsuario, setTipoUsuario] = useState<'aluno' | 'professor'>('aluno');
  const [apelido, setApelido] = useState<string>('');
  const [nome, setNomecompleto] = useState<string>('');
  const [cpf, setCpf] = useState<string>(''); //aparentemente ele não pode estar vazio, então coloquei uma string vazia para usar mascara
  const [telefoneOriginal, setTelefoneOriginal] = useState<string>(''); //esse é somente o número para o backend
  const [telefone, setTelefone] = useState<string>(''); //aparentemente ele não pode estar vazio, então coloquei uma string vazia
  const [cpfOriginal, setCpfOriginal] = useState<string>(''); //esse é somente o número para o backend
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
      setTelefoneOriginal(value);
    }
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
      setCpf(formatCpf(value));
      setCpfOriginal(value);
    }
  };

  // No handle você precisa passar ASYNC pra declarar que é uma função assíncrona (funções que demoram pra concluir, sabe?)
  // então toda vez que for usar um try catch você provavelmente vai usar await pra esperar a resposta de algo e precisa passar async na função
  // geralmente funções que demoram é por causa de chamadas de rede ou leitura e escrita de arquivos (qualquer coisa q envolva entrada e saida basicamente)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!apelido || !nome || !email || !senha || !confirmaSenha || (tipoUsuario === 'professor' && (!cpf || !telefone))) {
      setErrorMessage('Preencha todos os campos obrigatórios.');
      modalRef.current?.showModal();
      return;
    }

    if (tipoUsuario === 'professor' && cpf.length !== 14) {
      setErrorMessage('O CPF deve ter 11 dígitos.');
      modalRef.current?.showModal();
      return;
    }

    if (tipoUsuario === 'professor' && telefone.length !== 16) {
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
    // cometi o erro de colocar ele antes das validações, então ele ficava rodando mesmo se tiver erro
    const formData = {
      apelido,
      nome,
      cpf: cpfOriginal,
      telefone: telefoneOriginal,
      instituicao,
      email,
      senha,
      tipoUsuario
    };

    // e como falei, declarei async na função e uso o await no try catch (que é pra esperar a resposta da requisição)
    // como se fosse uma pausa no código até a resposta chegar
    // então é try(tente) enviar os dados do formulário e catch(capturar) um erro caso tenha falha no envio, sacou?
    // ctrl + click no enviarDadosCadastro pra ver o que o axios faz com o formData
    try {
      const response = await enviarDadosCadastro(formData);
      console.log('Dados enviados com sucesso:', response.data);
      goToLogin(); // se der certo, manda o caba pra página de login
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      console.log(formData);
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
      <CadastroPanel>
        <UserTypeSelector userType={tipoUsuario} setUserType={setTipoUsuario} />
        <DisableZoom />
        {isLoading && <Spinner />}
        <form onSubmit={handleSubmit}>
          <div>
            <LeftLabel>Apelido</LeftLabel>
            <InputStyle placeholder="Insira o apelido" value={apelido} onChange={(e) => setApelido(e.target.value)} required />
            <LeftLabel>Nome Completo</LeftLabel>
            <InputStyle placeholder="Insira o nome completo" value={nome} onChange={(e) => setNomecompleto(e.target.value)} required />
            <LeftLabel>CPF</LeftLabel>
            <InputStyle placeholder="Insira o CPF" value={cpf} onChange={handleCpfChange} maxLength={14} required />
            <LeftLabel>Número de telefone</LeftLabel>
            <InputStyle placeholder="Insira o número" value={telefone} onChange={handleTelefoneChange} maxLength={15} required />
            <LeftLabel>Instituição de Ensino</LeftLabel>
            <SelectStyle value={instituicao} onChange={(e) => setInstituicao(e.target.value)}>
              <option value="senacsantoamaro">SENAC (Centro Universitário Santo Amaro)</option>
              <option value="senacitaquera">SENAC Itaquera</option>
              <option value="senacsaomiguel">SENAC S.Miguel</option>
            </SelectStyle>
          </div>
          <div>
            <LeftLabel>E-mail</LeftLabel>
            <InputStyle placeholder="Insira o e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <LeftLabel>Senha</LeftLabel>
            <InputStyle type="password" placeholder="Insira a senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
            <LeftLabel>Confirme sua senha</LeftLabel>
            <InputStyle type="password" placeholder="Confirme a senha" value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} required />
            <LargeButtonStyle type='submit' disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'Cadastre-se'}
            </LargeButtonStyle>
          </div>
        </form>
        <ModalDialog ref={modalRef} onClose={() => modalRef.current?.close()}>
          <CenterLabel>{errorMessage}</CenterLabel>
        </ModalDialog>
      </CadastroPanel>
    </>
  );
}
