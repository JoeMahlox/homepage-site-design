import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html { 
            background: url(images/dark-purple-background.jpg) no-repeat center center fixed; 
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }
    
    body {
        font-family: 'Helvetics Neue', Heletica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        //background-color: black;
        color: white;
        font-size: 16px;

        background-position: center;
  background-repeat: no-repeat;
  background-size: cover;        
    }
`;
