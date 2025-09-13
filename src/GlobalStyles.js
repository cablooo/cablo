import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scrollbar-width: thin;
  scrollbar-color: rgba(155,155,155, 0.5) transparent;
}

*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(155,155,155, 0.5);
  border-radius: 20px;
  border: transparent;
}

body {
  background: #080404;
  color: #DADBDD;
  font-family: 'Trajan Pro', sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
}

.home {
  position: relative;
  overflow: hidden;

  #line, #line2 {
    position: absolute;
    z-index: -1;
  }

  #line {
    top: 0;
    left: 14rem;
    height: 70vh;
  }

  #line2 {
    top: 25vh;
    left: 10rem;
    height: 100vh;
  }

  #cat-image {
    position: absolute;
    bottom: 0;
    left: 2rem;
    width: 20rem;
    z-index: -1;
    animation: float 6s ease-in-out infinite;
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

@media (max-width: 1200px) {
  .home {
    #line {
      left: 7rem !important;
    }

    #line2 {
      left: 5rem !important;
    }
  }
}

@media (max-width: 768px) {
  .home {
    #line, #line2 {
      display: none;
    }

    #cat-image {
      width: 10rem;
      left: 1rem;
    }
  }

  body {
    font-size: 14px;
  }
}
`;

export default GlobalStyle;