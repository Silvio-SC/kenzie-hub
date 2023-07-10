import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`

:root {
        --Color-primary: #FF577F;
        --Color-primary-focus: #FF427F;
        --Color-primary-nagative: #59323F;
        --Color-gray-4: #121214;
        --Color-gray-3: #212529;
        --Color-gray-2: #343B41;
        --Color-gray-1: #868E96;
        --Color-gray-0: #F8F9FA; 
        
        --Color-sucess: #3FE864; 
        --Color-negative: #E83F5B;

        --font: 'Inter', sans-serif;
    }

    body {
        font-family: var(--font);
        color: var(--Color-gray-0);
        background-color: #000;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    input, button, select {
        outline: none;
        border: none;
    }

`