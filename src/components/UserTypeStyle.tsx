import React from 'react';
import styled from 'styled-components';

const SelectorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 18px;
  cursor: pointer;
  margin-right: 20px;

  input {
    margin-right: 5px;
  }
`;

interface UserTypeSelectorProps {
    userType: 'aluno' | 'professor';
    setUserType: (type: 'aluno' | 'professor') => void;
}

const UserTypeSelector: React.FC<UserTypeSelectorProps> = ({ userType, setUserType }) => {
    return (
        <SelectorContainer>
            <Label>
                <input
                    type="radio"
                    value="aluno"
                    checked={userType === 'aluno'}
                    onChange={() => setUserType('aluno')}
                />
                Aluno
            </Label>
            <Label>
                <input
                    type="radio"
                    value="professor"
                    checked={userType === 'professor'}
                    onChange={() => setUserType('professor')}
                />
                Professor
            </Label>
        </SelectorContainer>
    );
};

export default UserTypeSelector;
