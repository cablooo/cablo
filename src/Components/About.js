import React from 'react';
import pfp from '../imgs/pfp.jpg';
import healthBar from '../imgs/pngtree-health-bar-png-image_6110933.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import styled, { keyframes } from 'styled-components'; // Import keyframes
import { motion } from 'framer-motion';

// Keyframe animation for the pulsating shadow
const glow = keyframes`
  0% {
    box-shadow: 0 0 5px #DADBDD;
  }
  50% {
    box-shadow: 0 0 15px #DADBDD, 0 0 20px #DADBDD;
  }
  100% {
    box-shadow: 0 0 5px #DADBDD;
  }
`;

const About = () => {

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", stiffness: 100 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  return (
    <StyledAbout className='about-me'>
      <motion.div 
        className='container'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        
        <div className='text-box'>
          <motion.h1 variants={titleVariants}>Yousef Bafayad</motion.h1>
          <motion.h2 variants={titleVariants}>Front-End Developer & MIS Student</motion.h2>
          <motion.p variants={textVariants}>
            <p>I'm 19 years old</p>  and from Saudi Arabia.
            I'm a front‑end developer, and I study MIS (Management Information Systems) in university.
            I started learning web development when I was 13 years old, so I have about <p>6 years of experience. </p>
            I enjoy making websites, improving my skills, and learning new things every day.
          </motion.p>
        </div>
        <div className='image-box'>
          <motion.img 
            src={pfp} 
            alt="Profile Picture" 
            drag="false"
          />
          <motion.div className='links' variants={iconVariants}>
          <motion.a 
            variants={iconVariants} 
            href="https://www.instagram.com/i_cabloi/"
            whileHover={{ scale: 1.2, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" color='#DADBDD' />
          </motion.a>
          <motion.a 
            variants={iconVariants} 
            href="https://github.com/cablooo"
            whileHover={{ scale: 1.2, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" color='#DADBDD' />
          </motion.a>
          <motion.a 
            variants={iconVariants} 
            href="https://x.com/T_cablo"
            whileHover={{ scale: 1.2, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={faXTwitter} size="2x" color='#DADBDD' />
          </motion.a>
        </motion.div>
        </div>
      </motion.div>
    </StyledAbout>
  );
};

const StyledAbout = styled(motion.div)`
  padding-top: 5rem;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 10;

  .container {
    width: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    // border: 1px solid rgba(218, 219, 221, 0.2);
    border-radius: 15px;
    padding: 2rem;
    // background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border-bottom: none; /* Removed redundant border */

    .image-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      align-items: center;

      img {
        width: 70%;
        max-width: 300px;
        padding: 20px;
        border: 2px #4c4c4c solid;
        border-radius: 50%;
        animation: ${glow} 3s ease-in-out infinite; /* Added glow animation */
        transition: none;
      }
    }

    .text-box {
      font-family: "Lora", serif;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: rgba(255, 255, 255, 0.03);
      padding: 1.5rem;
      border-radius: 10px;

      h1 {
        font-size: 5rem;
        line-height: 1.2;
      }

      h2 {
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        
        p {
          display: inline;
          color: #3d7cfa;
        }
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
        transition: none;
        &:hover {
          transform: none;
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
`;

export default About;