import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
*{
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0;
    

}

body{
    background-color: ${({ theme }) => theme.colors.body};
    
}

body::-webkit-scrollbar {
  width: 0.6em;
  
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 183, 190, 0.6);
  
}
 
body::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
}

`;

export default GlobalStyles;
