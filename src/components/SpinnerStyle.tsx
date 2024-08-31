import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  align-self: center;
  justify-self: center;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #3498db;
  animation: ${spin} 1s ease-in-out infinite;
`;

const SpinnerStyle = () => {
  return <SpinnerWrapper />;
};

export default SpinnerStyle;