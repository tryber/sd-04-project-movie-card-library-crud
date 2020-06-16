import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: sans-serif;
    text-align: justify;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  body {
    align-items:center;
    background: whitesmoke;
    color: black;
    display:flex;
    font-family: sans-serif;
    font-size: 14px;
    height: max-content;
    justify-content:center;
  }
  span {
    align-items:center;
    display:flex;
    font-size: 25px;
    font-weight: 700;
    height:50vh;
    justify-content:center;

  }
  p {
    padding: 1vh 1vw;
  }
  /* width */
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  background: gray; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  border: 0.5px solid gray;
  background: #e5ecf4; 
}

`;
