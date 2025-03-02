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

        <div className="project-container">
            {data.map(item => 
                <Project
                 name={item.name} 
                 description={item.description} 
                 url={item.url} 
                 icons={item.icons} 
                 cover={item.cover} 
                 key={item.name} 
                 />
            )}
        </div>

        </div>
    </StyledProjects>
  )
}

const StyledProjects = styled.div`
    width: 100%;
    font-family: 'Trajan Pro', sans-serif;
    margin-top: 2rem;

    .container {
        width: 80%;
        margin: 0 0 0 auto;

        .project-container {
            width: 95%;
            margin: auto;

            
        }
    }
`

export default Projects