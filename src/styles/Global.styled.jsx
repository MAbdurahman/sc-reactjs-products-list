import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   *,
   *::after,
   *::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      outline: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -o-user-select: none;
      user-select: none;
   }

   *::-moz-focus-inner {
      border: 0;
   }

   *:focus {
      outline: none;
   }

   html {
      height: 100dvh;
      width: 100dvw;
      font-size: 100%;
      scroll-behavior: smooth;
      scrollbar-width: none;
      overflow-x: hidden;
      -ms-overflow-style: none;
   }

   @media screen and (max-width: 540px) {
      html {
         font-size: 62.5%;
      }

   }
   @media screen and (max-width: 390px) {
      html {
         font-size: 50%;
      }

   }

   body {
      position: relative;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 1;
      overflow-x: hidden;
      font-family: 'Mulish', sans-serif;
      font-weight: 400;
      font-style: normal;
      font-optical-sizing: auto;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      line-height: 1.5;
      color: #333;
      background-color: #ddd;
   }
   
   /*===============================================================
          Typography Scale - 1.250 - Major Third
   ==================================================================*/
   h1, h2, h3, h4, h5, h6 {
      font-family: 'Mulish', sans-serif;
      font-weight: 700;
      font-style: normal;
      font-optical-sizing: auto;
      text-rendering: optimizeLegibility;
      line-height: 1.3;
   }

   h1 {
      font-size: 3.815rem;
   }

   h2 {
      font-size: 3.052rem;
   }

   h3 {
      font-size: 2.441rem;
   }

   h4 {
      font-size: 1.953rem;
   }

   h5 {
      font-size: 1.563rem;
   }

   h6 {
      font-size: 1.25rem;
   }

   p, small {
      font-family: 'Mulish', sans-serif;
      font-weight: 400;
      font-style: normal;
      font-optical-sizing: auto;
      text-rendering: optimizeLegibility;
   }

   p {
      font-size: 1rem;
      margin-bottom: 1em;
   }

   small {
      font-size: 0.8rem;
   }

   img {
      width: 100%;
      height: auto;
   }
   ul {
      list-style: none;
   }

   a {
      text-decoration: none;
      cursor: pointer;
      opacity: 0.75;
   }

   a:hover {
      cursor: pointer;
      opacity: 1;
   }
   
   

   /*===============================================================
          Utilities
   ==================================================================*/
   .utils-container-fluid {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-left: 16px;
      padding-right: 16px;
   }

   .utils-container {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-left: 16px;
      padding-right: 16px;
   }

   @media (min-width: 576px) {
      .utils-container {
         max-width: 544px;
      }
   }
   @media (min-width: 768px) {
      .utils-container {
         max-width: 720px;
      }
   }
   @media (min-width: 992px) {
      .utils-container {
         max-width: 960px;
      }
   }
   @media (min-width: 1200px) {
      .utils-container {
         max-width: 1144px;
      }
   }
   @media (min-width: 1400px) {
      .utils-container {
         max-width: 1320px;
      }
   }

   .navbar-section {
      position: fixed;
      top: 0;
      left: 0;
       background-color: hsl(210, 0%, 18%);
   }
`
export default GlobalStyles;