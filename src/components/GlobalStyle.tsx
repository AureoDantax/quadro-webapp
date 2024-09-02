import { createGlobalStyle } from 'styled-components';

const GlobalStyleCreate = createGlobalStyle` /* ESTILO GLOBAL, BOM UTILIZAR EM TODA PÁGINA */

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Aldrich&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none; // isso aqui impede a seleção (que deixa tudo azul ao clicar e arrastar na página)
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }

  html {
    width: 100%;
    height: 100%;
  }
`;

const GlobalStyle: React.FC = () => {
    return (
        <GlobalStyleCreate />
    );
}

export default GlobalStyle;