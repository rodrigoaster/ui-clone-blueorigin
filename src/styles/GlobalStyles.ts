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
    }

    ul {
        list-style-type: none;
    }

    *, button, input {
        border: 0;
        background: none;
    }
`;