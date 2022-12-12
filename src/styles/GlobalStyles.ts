import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Titillium Web', sans-serif;
    }

    html {
        min-height: 100%;
        background: #000000;
    }

    ul {
        list-style-type: none;
    }
    
    h1, h2, h3, h4 {
      text-transform: uppercase;
    }

    *, button, input {
        border: 0;
        background: none;
    }
`;