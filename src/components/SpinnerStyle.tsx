import styled from 'styled-components';

const SpinnerWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  color: #0000;
  background: linear-gradient(90deg, #FFA800 calc(50% + 0.5ch), #c4c4c4 0) right/calc(200% + 1ch) 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: l7 1s infinite steps(15);

  &:before {
    content: "Carregando...";
  }

  @keyframes l7 {
    to {
      background-position: left;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  z-index: 999; // isso peguei na net, faz com que o spinner fica em cima de tudo
`;

const SpinnerStyle = () => {
  return (
    <>
      <Overlay>
        <SpinnerWrapper />;
      </Overlay>
    </>
  );
};

export default SpinnerStyle;