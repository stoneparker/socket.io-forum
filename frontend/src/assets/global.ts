import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');

   * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
   }

   html, body, #root {
      height: 100%;
   }

   body {
      font: 14px 'Rubik', sans-serif;
      background: #F7F7F7;
      color: #333;
      -webkit-font-smoothing: antialiased !important;
   }

   ul {
      list-style: none;
   }
`;

export default GlobalStyle;