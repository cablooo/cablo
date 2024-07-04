import React from 'react'
import pfp from '../imgs/1_2.jpg'
import healthBar from '../imgs/pngtree-health-bar-png-image_6110933.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <StyledAbout className='about-me'>
      <div className='container'>
        <div className='image-box'>
          <img src={pfp} alt="Profile Picture" />
        </div>
        <div className='text-box'>
          <h1>Hola, I'm cablo</h1>
          <p>
            17 Years old, front-end developer and DMC lover
          </p>
          <img src={healthBar} alt="Health Bar" draggable="false" />
        </div>
        <div className='links'>
          <a href="https://www.instagram.com/i_cabloi/">
            <FontAwesomeIcon icon={faInstagram} size="2x" color='#DADBDD' />
          </a>
          <a href="https://github.com/cablooo">
            <FontAwesomeIcon icon={faGithub} size="2x" color='#DADBDD' />
          </a>
          <a href="https://x.com/T_cablo">
            <FontAwesomeIcon icon={faXTwitter} size="2x" color='#DADBDD' />
          </a>
        </div>
      </div>
    </StyledAbout>
  )
}

const StyledAbout = styled(motion.div)`
  padding-top: 5rem;
  width: 100%;

  .container {
    width: 50%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid #DADBDD;
    padding-bottom: 2rem;

    .image-box {
      width: 100%;

      img {
        width: 70%;
        padding: 20px;
        border: 2px #4c4c4c solid;
        border-radius: 5px;
        box-shadow: 0 0 8px #DADBDD;
      }
    }

    .text-box {
      font-family: "Lora", serif;

      h1 {
        margin-bottom: 15px;
      }

      img {
        width: 80%;
        margin-top: 20px;
      }
    }

    .links {
      margin: 20px auto 0;
      grid-column-start: 1;
      grid-column-end: 3;
      display: flex;
      width: 20%;
      justify-content: space-between;
      align-items: center;
    }
  }
`

export default About