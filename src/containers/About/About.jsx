import React from 'react'
import TypingText from '../../components/TypingText/TypingText'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, iconVariants } from '../../utils/motion'
import { GiSurferVan, GiSurfBoard } from 'react-icons/gi'

import './About.scss'

const About = () => {
  return (
    <section id="about">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="about__container"
      >
        <TypingText title="| About Us"
        />
        <motion.div className='about__p-container' variants={fadeIn('up', 'tween', 0.2, 1)}>
          <motion.div className='about__icon-container' variants={iconVariants('left')}>
            <GiSurferVan />
          </motion.div>
          <p>
            Welcome to our surf school in Figueira da Foz,
            a stunning coastal town. Our personalized surfing
            experience caters to students of all ages and skill
            levels, led by passionate and experienced instructors.
            With top-quality coaching and safety measures, we ensure
            our students become confident and accomplished surfers using
            the latest equipment. We strive to create a welcoming and inclusive
            environment, where students can enjoy the beauty of the ocean while
            improving their surfing skills. Join us today and discover the thrill
            of surfing in Portugal's picturesque location.
          </p>
        </motion.div>
        <motion.div className='about__p-container' variants={fadeIn('up', 'tween', 0.4, 1)}>
          <motion.div className='about__icon-container' variants={iconVariants('left')}>
            <GiSurfBoard />
          </motion.div>
          <p>
            Surfing is more than a sport; it's a way of life,
            a way to connect with nature, and a way to challenge
            oneself physically and mentally. Our surf school is
            committed to providing a safe and supportive environment
            where students can learn to surf and develop a lifelong
            passion for the ocean. We believe in promoting sustainable
            practices and inspiring our students to become responsible
            surfers while nurturing a deep appreciation for the beauty
            and power of the ocean.Find us at Praia da Claridade, the
            main beach, near the lifeguard tower. Join us and catch some
            waves!
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About