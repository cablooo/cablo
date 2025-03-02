import React from 'react'
import projectsData from '../data'
import Project from './Project'
import styled from 'styled-components'

const Projects = () => {
  const data = projectsData()

  return (
    <StyledProjects className='projects-container'>
      <div className="container">
        <h1 className="title">Projects</h1>
        <div className="project-grid">
          {data.map((item, index) => (
            <Project
              key={index}
              name={item.name}
              description={item.description}
              url={item.url}
              icons={item.icons}
              cover={item.cover}
            />
          ))}
        </div>
      </div>
    </StyledProjects>
  )
}

const StyledProjects = styled.div`
  width: 100%;
  padding: 4rem 0;
  background: #080404;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #DADBDD;
  }

  .project-grid {
    display: grid;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 0;

    .title {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .project-grid {
      gap: 1.5rem;
    }
  }
`

export default Projects