import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Import your icons (update paths as needed)
import htmlIcon from '../imgs/html-512.png';
// Corrected the path for the CSS icon
import cssIcon from '../imgs/png-transparent-css-hd-logo-removebg-preview.png'; 
import jsIcon from '../imgs/JavaScript-logo.png';
import sassIcon from '../imgs/sass-1-logo-png-transparent.png';
import tailwindIcon from '../imgs/tailwind.png';
import reactIcon from '../imgs/react_logo-512.png';
import nextjsIcon from '../imgs/nextJs.png';
import pythonIcon from '../imgs/python.png';

const Languages = () => {
  const skills = [
    { name: 'HTML5', icon: htmlIcon },
    { name: 'CSS3', icon: cssIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'Sass', icon: sassIcon },
    { name: 'Tailwind', icon: tailwindIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Next.js', icon: nextjsIcon },
    { name: 'Python', icon: pythonIcon },
  ];

  return (
    <StyledLanguages>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="title"
      >
        Technologies I use
      </motion.h2>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div 
            key={skill.name}
            className="skill-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: index * 0.1,
              type: "spring", 
              stiffness: 260, 
              damping: 20 
            }}
            whileHover={{ 
              y: -5,
              scale: 1.05,
              boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
            }}
          >
            <div className="skill-content">
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="skill-icon"
              />
              <span>{skill.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </StyledLanguages>
  );
};

const StyledLanguages = styled.div`
  padding: 4rem 0;
  margin: 4rem 0;
  position: relative;

  .title {
    text-align: center;
    font-size: 2.8rem;
    color: #DADBDD;
    margin-bottom: 4rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    z-index: 2;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
  }

  .skill-item {
    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.02)
    );
    padding: 2rem;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: default;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        45deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
      );
      transform: rotate(45deg);
      transition: all 0.5s;
      opacity: 0;
    }

    &:hover::before {
      opacity: 1;
      top: -30%;
      left: -30%;
    }
  }

  .skill-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .skill-icon {
    width: 60px;
    height: 60px;
    object-fit: contain;
    filter: drop-shadow(0 2px 5px rgba(0,0,0,0.3));
    transition: transform 0.3s ease;
  }

  .skill-item span {
    font-size: 1.2rem;
    font-weight: 500;
    color: #DADBDD;
    text-align: center;
    transition: color 0.3s ease;
  }

  @media (max-width: 768px) {
    padding: 3rem 0;
    
    .title {
      font-size: 2.2rem;
      margin-bottom: 3rem;
    }

    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      padding: 0 1rem;
    }

    .skill-item {
      padding: 1.5rem;
    }

    .skill-icon {
      width: 50px;
      height: 50px;
    }

    .skill-item span {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .skill-item {
      padding: 1rem;
    }

    .skill-icon {
      width: 40px;
      height: 40px;
    }
  }
`;

export default Languages;