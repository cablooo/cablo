import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
        <h3>There are more projects in my <a href='https://github.com/cablooo'>github account</a> if you like to see them</h3>
        <h4 className='my-email'>yosking22@gmail.com</h4>
    </StyledFooter>
  )
}

const StyledFooter = styled(motion.div)`
    width: 70%;
    margin: 7em auto 0;
    padding-bottom: 10em;
    text-align: center;

    h3 {
        margin: 0 auto 30px;
        border-bottom: 1px solid #DADBDD;
        padding: 0 0.5em 1em;
        width: 70%;
    }

    h4 {
        margin: auto;
        border-bottom: 1px solid #DADBDD;
        padding: 0 0.5em 1em;
        width: 30%;
    }
`

export default Footer