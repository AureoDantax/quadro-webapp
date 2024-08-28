import { useState } from 'react';
import ButtonStyle from "../components/ButtonStyle";
import InputStyle from "../components/InputStyle";
import { createGlobalStyle } from 'styled-components';
import { StyledLabel } from "../components/LoginLabel";
import CadastroDiv from "../components/CadastroPanel";
import UserTypeSelector from '../components/UserTypeStyle';
import SelectStyle from '../components/SelectStyle';
import styled from 'styled-components';

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

const FormContainer = styled.div`  /* Falhei em tentar colocar a separação de colunas no container do cadastro então deixei aqui msm,*/
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

  return (
    <>
      <GlobalStyleCreate />
      <CadastroDiv>
        <UserTypeSelector userType={userType} setUserType={setUserType} />
        <FormContainer>
          <Column>
            <StyledLabel>Nome</StyledLabel>
            <InputStyle placeholder="Insira seu nome" />
            <StyledLabel>Sobrenome</StyledLabel>
            <InputStyle placeholder="Insira seu sobrenome" />
            {userType === 'professor' && (
              <>
                <StyledLabel>CPF</StyledLabel>
                <InputStyle placeholder="Insira seu CPF" />
                <StyledLabel>Número de telefone</StyledLabel>
                <InputStyle placeholder="Insira seu número" />
              </>
            )}
            <StyledLabel>Instituição de Ensino</StyledLabel>
            <SelectStyle>
              <option value="instituicao1">SENAC (Centro Universitário Santo Amaro)</option>
              <option value="instituicao2">SENAC Itaquera</option>
              <option value="instituicao3">SENAC S.Miguel</option>
            </SelectStyle>
          </Column>
          <Column>
            <StyledLabel>E-mail</StyledLabel>
            <InputStyle placeholder="Insira seu e-mail" />
            <StyledLabel>Senha</StyledLabel>
            <InputStyle type="password" placeholder="Insira sua senha" />
            <StyledLabel>Confirme sua senha</StyledLabel>
            <InputStyle type="password" placeholder="Confirme sua senha" />
            <ButtonStyle type='submit'>Cadastre-se</ButtonStyle>
          </Column>
        </FormContainer>
      </CadastroDiv>
    </>
  );
}
