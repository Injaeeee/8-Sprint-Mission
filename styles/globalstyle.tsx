import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ isLoginPage: boolean }>`
    html,
    body {
    margin: 0;
    font-family: 'Noto Sans', 'Noto Sans KR';
    width: 100%;
    align-items: center; 
    }



    #__next {
    padding: ${({ isLoginPage }) =>
      isLoginPage ? "231px 640px" : "94px 360px"};
    width: 100%;

    @media (max-width: 744px) {
      padding: ${({ isLoginPage }) =>
        isLoginPage ? "192px 52px" : "94px 24px"};
    }
  }

    

    a {
  
    }

    * {
    box-sizing: border-box;
    }


    

`;

export default GlobalStyle;
