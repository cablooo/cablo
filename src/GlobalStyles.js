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
        scrollbar-color: rgba(155,155,155, 0.5);
        border-radius: 20px;
        border: transparent;
    }

    body {
        background: #080404;
        color: #DADBDD;
    }

    a {
        color: inherit;
    }

    .home {
        position: relative;

        #line {
            position: absolute;
            top: 0;
            left: 14rem;
            height: 70vh;
        }

        #line2 {
            position: absolute;
            top: 25vh;
            left: 10rem;
            height: 100vh;
        }

        #cat-image {
            position: absolute;
            bottom: 0;
            left: 2rem;
            width: 20rem;
        }
    }


    @media screen and (max-width: 1300px) {
        .project-box {
            display: block;

            &:nth-child(2) {
        
                .image-holder {
                    grid-row-start: 1 !important;
                    grid-row-end: 2 !important;
                    grid-column-start: 1 !important;
                }

                .text-holder {
                    grid-row-start: 2 !important;
                    grid-row-end: 3 !important;
                    grid-column-start: 1 !important;
                }
            }
        }
    }

    @media screen and (max-width: 1200px) {
        #line {
            left: 7rem !important;
        }

        #line2 {
            left: 5rem !important;
        }
    }

    @media screen and (max-width: 800px) {
        #cat-image {
            width: 10rem !important;
        }

        #line {
            display: none;
        }

        .about-me {
            .container {
                width: 90%;
            }
        }
    }

    @media screen and (max-width: 700px) {
       
    }
`

export default GlobalStyle