import styled from 'styled-components';

interface InputStyleProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputDiv = styled.input`
  align-self: center;
  margin-bottom: 10px;
  width: 357px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 30px;
  border: none;
  background-color: #FFF;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25));
  padding: 0 20px;
  font-size: 18px;

  &:focus {
    outline: none;
  }
`;

const InputStyle: React.FC<InputStyleProps> = ({ type = 'text', placeholder = 'Insira', value, onChange}) => {
  return (
    <InputDiv type={type} placeholder={placeholder} value={value} onChange={onChange} />
  );
}

export default InputStyle;
