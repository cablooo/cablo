import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Project = ({ name, description, url, icons, cover }) => {
  return (
    <StyledProject className='project-box' 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='image-holder'>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={cover} alt={name} />
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
            <img key={index} src={icon} alt="Technology icon" />
          ))}
        </div>
      </div>
    </StyledProject>
  )
}

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
      transition: transform 0.3s ease;
      
      &:hover {
        transform: scale(1.03);
      }
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
        transition: transform 0.3s ease;
        
        &:hover {
          transform: scale(1.1);
        }
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
`

export default Project