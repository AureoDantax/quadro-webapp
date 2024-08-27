import styled from 'styled-components';

interface InputStyleProps {
    type?: string;  // Define a propriedade type como opcional
  }

const InputDiv = styled.input`
  align-self: center;
  margin-bottom: 10px;
  width: 457px;
  height: 60px;
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

const InputStyle: React.FC<InputStyleProps> = ({ type = 'text' }) => {
    return (
        <InputDiv type={type} />
    );
}

export default InputStyle;
