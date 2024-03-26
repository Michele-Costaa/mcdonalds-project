import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: sans-serif;
}
`;

const Center = css`
    display: flex;
    align-items: center;
`;

export const Header = styled.header`
    height: 17vh;
    ${Center}
    justify-content: space-between;

    #logo {
        height: 12vh;
        width: 10vw;
    }
`;

export const Nav = styled.nav`
    ${Center}
    justify-content: space-evenly;
    gap: 1rem;
    width: 30vw;

    button {
        ${Center}
        justify-content: center;
        width: 12vw;
        height: 6vh;
        border-radius: 5px;
        cursor: pointer;
    }

    .button-one {
        background-color: #FFFFFF;
        font-size: medium;
        border: none;
    }

    .button-two {
        background-color: #FFC72C;
        font-weight: bold;
        border: none;
    }

    @media screen and (max-width: 600px) {
    width: 80vw;

    button {
      width: 30vw;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    width: 60vw;

    button {
      width: 20vw;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    width: 40vw;

    button {
      width: 15vw;
    }
  }

  @media screen and (min-width: 1441px) {
    width: 30vw;

    button {
      width: 12vw;
    }
  }
`;