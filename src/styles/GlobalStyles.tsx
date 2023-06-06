import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
    }
    html {
        min-height: 100%;
        font-size: 62.5%;
        box-sizing: border-box;
        
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    h3, h1, h2, p{
        margin: 0;
    }
    img,
    picture {
        width: 100%;
        display: block;
    }
`;
