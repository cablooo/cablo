import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Project = ({name, description, url, icons, cover}) => {
  return (
    <StyledProject className='project-box'>
        <div className='image-holder'>
            <a href={url}><img src={cover} alt={name} /></a>
        </div>

        <div className='text-holder'>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Website URL: <a href={url}>{url}</a></p>
            <div className="icon-holder">
                {icons.map(icon => 
                    <img src={icon} alt={icon} />
                )}
            </div>
        </div>
    </StyledProject>
  )
}

const StyledProject = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    text-align: center;
    gap: 2rem;
    margin-top: 4rem;
    &:nth-child(2) {
        
        .image-holder {
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 1;
        }

        .text-holder {
            grid-column-start: 1;
            grid-row-start: 1;
            grid-column-end: 2;
        }
    }

    .image-holder {
        width: 100%;

        img {
            width: 100%;
        }
    }

    .text-holder {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        * {
            margin: 0.5rem 0;
        }

        a {
            color: inherit;
        }

        .icon-holder {
            display: flex;
            width: 40%;
            justify-content: space-evenly;
            align-items: center;

            img {
                width: 50px
            }
        }
    }

`

export default Project