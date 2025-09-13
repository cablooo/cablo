import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const projectVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 50 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 100,
      damping: 15
    }
  },
};

const Project = ({ name, description, url, icons, cover }) => {
  return (
    <StyledProject 
      className='project-box'
      variants={projectVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className='image-holder'>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <motion.img 
            src={cover} 
            alt={name} 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </a>
      </div>

      <div className='text-holder'>
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="url">
          Website URL:{" "}
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url.replace(/(^\w+:|^)\/\//, '')}
          </a>
        </p>
        <div className="icon-holder">
          {icons.map((icon, index) => (
            <motion.img 
              key={index} 
              src={icon} 
              alt="Technology icon" 
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </StyledProject>
  );
};

const StyledProject = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin: 2rem 0;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;

  .image-holder {
    width: 100%;
    overflow: hidden;
    border-radius: 8px;
    
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      transition: none;
    }
  }

  .text-holder {
    h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 1.2rem;
    }

    .url {
      word-break: break-all;
    }

    .icon-holder {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;

      img {
        width: 40px;
        height: 40px;
        transition: none;
      }
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 3rem;

    &:nth-child(even) {
      .image-holder {
        order: 2;
      }
    }
  }
`;

export default Project;