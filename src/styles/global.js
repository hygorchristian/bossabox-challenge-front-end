import { createGlobalStyle } from "styled-components";
import { Ink, LightInk } from "../utils/Colors";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    letter-spacing: 1px;
  }

  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Source Sans Pro', sans-serif;
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: 600;
  }

  h1, h2, h3, h4, h5, h6, body{
    color: ${Ink};
  }

  h1{ font-size: 42px;  }
  h2{ font-size: 36px;  }
  h3{ font-size: 30px;  }
  h4{ font-size: 26px;  }
  h5{ font-size: 24px;  }

  p{
    color: ${LightInk}
    font-size: 20px;
  }

  .modal{
    display:flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.5)
  }
`;

export default GlobalStyle;
