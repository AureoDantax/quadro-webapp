import styled from 'styled-components';

// Estilizar apenas o select
const SelectStyle = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 2px solid #ccc;
  border-radius: 30px;
  background-color: #f8f8f8;
  font-size: 16px;
  color: #333;

  &:focus {
    border-color: #FFA800;
    background-color: #fff;
    outline: none;
  }
`;

export default SelectStyle;
