import { createGlobalStyle } from 'styled-components';

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

export function Home(){
    return(
        <>
        <GlobalStyleCreate/>
        <h1>HOME</h1>
        </>
    )
}