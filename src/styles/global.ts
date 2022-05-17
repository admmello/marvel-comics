import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   :root {
     --background: #2B2B2B;
     --primary: #ED2324;
     --text-secondary: #B0B0B0;
     --text: #FFFFFF;
     --shadow: rgb(68,68,68, 0.7);
   }
   
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }

   body {
     background: var(--background);
     -webkit-font-smoothing: antialiased;
     color: var(--text);
   }

   body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
   }

   button {
     cursor: pointer;
   }

   ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: var(--shadow);
    }

    ::-webkit-scrollbar-thumb {
        background: var(--primary);
    }
`
