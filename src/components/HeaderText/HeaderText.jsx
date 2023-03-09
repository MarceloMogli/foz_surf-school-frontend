import React from 'react'
import { motion } from 'framer-motion';
import { headerVariants } from '../../utils/motion';

const HeaderText = () => {
  return (
    <motion.div className="hero-banner__content">
        <motion.h1 className="hero-banner__title" variants={headerVariants} initial="hidden" animate="show">
          Learn to Surf with Us
        </motion.h1>
        <motion.p className="hero-banner__subtitle" variants={headerVariants} initial="hidden" animate="show">
          Join our community of surfers and experience the thrill of riding the waves
        </motion.p>
        <motion.a href="#Lessons" className="hero-banner__cta-button" variants={headerVariants} initial="hidden" animate="show">
          Book Now
        </motion.a>
      </motion.div>
  )
}

export default HeaderText