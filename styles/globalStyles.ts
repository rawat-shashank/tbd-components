import { createGlobalStyle } from 'styled-components';
import { BreakPoints } from './themes';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root {
        margin:0 auto;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        background-color: ${(props) => props.theme.backgroundColor.default};
        color : ${(props) => props.theme.text.primary};
        font-size: 1rem;
    }
    button {
        font-size: 0.75rem;
        font-weight: bold;
        line-height: 1.375rem;
        text-transform: uppercase;
    }
    a {
        text-decoration: none;
    }
    h1 {
        font-size: 2.5rem;
    }
    h2 {
        font-size: 2rem;
    }
    h3 {
        font-size: 1.75rem;
    }
    h4 {
        font-size: 1.5rem;
    }
    .subheading {
        font-size: 1.125rem;
    }
    .caption {
        font-size: 0.875rem;
    }
    .label {
        font-size: 0.75rem;
    }
    *, *:focus {
        outline:0;
    }
    @media (min-width: ${BreakPoints.mobile}) { 
        body {
            font-size: 1.125rem;
        }
        button {
            font-size: 0.875rem;
            line-height: 1.5rem;
        }
        h1 {
            font-size: 4rem;
        }
        h2 {
            font-size: 3rem;
        }
        h3 {
            font-size: 2.5rem;
        }
        h4 {
            font-size: 2rem;
        }
        .subheading {
            font-size: 1.5rem;
        }
        .caption {
            font-size: 1rem;
        }
        .label {
            font-size: 0.875rem;
        }
    }
`;
