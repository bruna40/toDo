import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FFFFFF;
        --gray-100: #F2F2F2;
        --gray-200: #D9D9D9;
        --gray-300: #808080;
        --gray-400: #333333;
        --gray-500: #262626;
        --gray-600: #1A1A1A;
        --gray-700: #0D0D0D;

        --purple: #8284FA;
        --purple-dark: #5E60CE;

        --blue: #4EA8DE;
        --blue-dark: #1E6F9F;

        --danger: #E25858;
    }

    :focus {
        outline: transparent;
        box-shadow: 0 0 0 2px var(--purple-dark);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--gray-600);
        color: var(--gray-200);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size:1rem;
    }
`
