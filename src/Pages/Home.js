import React from 'react'
import About from '../Components/About'
import line from '../imgs/Line 1.png'
import Projects from '../Components/Projects'
import Footer from '../Components/Footer'
import Cat from '../imgs/download copy.png'

const Home = () => {
  return (
    <div className='home'>
        <img id='line' src={line} alt="line" />
        <img id='line2' src={line} alt="line" />
        <About />
        <Projects />
        <Footer />
        <img id='cat-image' src={Cat} alt="cat" />
    </div>
  )
}

export default Home