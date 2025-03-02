import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
        <motion.h3 
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
            There are more projects in my <a href='https://github.com/cablooo' target="_blank" rel="noopener noreferrer">github account</a> if you like to see them
        </motion.h3>
        <motion.h4 
          className='my-email'
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
            <a href="mailto:yosking22@gmail.com">yosking22@gmail.com</a>
        </motion.h4>
    </StyledFooter>
  )
}

const StyledFooter = styled(motion.div)`
    width: 90%;
    max-width: 1200px;
    margin: 7em auto 0;
    padding-bottom: 5em;
    text-align: center;
    border-top: 1px solid rgba(218, 219, 221, 0.2);
    padding-top: 3em;

    h3 {
        margin: 0 auto 30px;
        padding: 0 0.5em 1em;
        width: 100%;
        max-width: 800px;
        font-size: 1.4rem;
        font-weight: 300;
        line-height: 1.6;

        a {
            color: #DADBDD;
            font-weight: 500;
            text-decoration: underline;
            transition: all 0.3s ease;
            
            &:hover {
                color: #fff;
                text-shadow: 0 0 8px rgba(255,255,255,0.3);
            }
        }
    }

    .my-email {
        margin: auto;
        padding: 0 0.5em 1em;
        width: 100%;
        max-width: 400px;
        font-size: 1.1rem;
        font-weight: 300;
        letter-spacing: 0.5px;
        word-break: break-all;
        transition: all 0.3s ease;

        &:hover {
            color: #fff;
        }
    }

    @media (max-width: 768px) {
        padding-bottom: 3em;
        padding-top: 2em;

        h3 {
            font-size: 1.2rem;
            width: 90%;
            margin-bottom: 1.5rem;
        }

        .my-email {
            font-size: 1rem;
            max-width: 300px;
        }
    }

    @media (max-width: 480px) {
        width: 95%;
        padding-bottom: 2em;

        h3 {
            font-size: 1.1rem;
            width: 100%;
            padding: 0 0 1em;
        }

        .my-email {
            font-size: 0.9rem;
            max-width: 250px;
        }
    }
`

export default Footer