import React from 'react'
import pfp from '../imgs/pfp.jpg'
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
          <h1>Hi, I'm Yousef Bafayad</h1>
          <p>
            An 18 Years old, front-end developer from Saudi Arabia.
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
  min-height: 100vh;
  display: flex;
  align-items: center;

  .container {
    width: 50%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid #DADBDD;
    padding-bottom: 2rem;

    .image-box {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 70%;
        max-width: 300px;
        padding: 20px;
        border: 2px #4c4c4c solid;
        border-radius: 50%;
        box-shadow: 0 0 8px #DADBDD;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.03);
        }
      }
    }

    .text-box {
      font-family: "Lora", serif;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        margin-bottom: 15px;
        font-size: 2.5rem;
        line-height: 1.2;
      }

      p {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      img {
        width: 80%;
        max-width: 400px;
        margin-top: 20px;
      }
    }

    .links {
      margin: 20px auto 0;
      grid-column: 1 / -1;
      display: flex;
      width: 100%;
      max-width: 300px;
      justify-content: space-between;
      align-items: center;

      a {
        transition: transform 0.3s ease;

        &:hover {
          transform: translateY(-3px);
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .container {
      width: 70%;
    }
  }

  @media (max-width: 768px) {
    padding-top: 3rem;

    .container {
      width: 90%;
      grid-template-columns: 1fr;
      gap: 2rem;

      .image-box {
        img {
          width: 60%;
          padding: 15px;
        }
      }

      .text-box {
        text-align: center;
        
        h1 {
          font-size: 2rem;
        }

        p {
          font-size: 1rem;
        }

        img {
          width: 100%;
          margin: 20px auto 0;
        }
      }

      .links {
        max-width: 250px;
      }
    }
  }

  @media (max-width: 480px) {
    .container {
      width: 95%;

      .image-box {
        img {
          width: 80%;
          padding: 10px;
        }
      }

      .text-box {
        h1 {
          font-size: 1.8rem;
        }
      }

      .links {
        max-width: 200px;
        
        a {
          font-size: 1.5em;
        }
      }
    }
  }
`

export default About