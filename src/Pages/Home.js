import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import About from '../Components/About';
import line from '../imgs/Line 1.png';
import Languages from '../Components/Languages';
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';
import Cat from '../imgs/download copy.png';

const Home = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className='home'>
      <img id='line' src={line} alt="line" />
      <img id='line2' src={line} alt="line" />
      <img id='cat-image' src={Cat} alt="Floating Cat" />
      
      {/* Apply animations to each component individually */}
      <motion.div
        key="about-section"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <About />
      </motion.div>
      
      <motion.div
        key="languages-section"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Languages />
      </motion.div>
      
      <motion.div
        key="projects-section"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Projects />
      </motion.div>
      
      <motion.div
        key="footer-section"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;