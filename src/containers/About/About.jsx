import React, {useState, useEffect} from 'react'
import TypingText from '../../components/TypingText/TypingText'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, iconVariants } from '../../utils/motion'
import { GiSurferVan, GiSurfBoard } from 'react-icons/gi'

import './About.scss'
import { client } from '../../client'

const About = () => {
  const [aboutData, setaboutData] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query).then((data) => {
      setaboutData(data);
    })
  }, [])
  
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
            {aboutData[0]?.overview}
          </p>
        </motion.div>
        <motion.div className='about__p-container' variants={fadeIn('up', 'tween', 0.4, 1)}>
          <motion.div className='about__icon-container' variants={iconVariants('left')}>
            <GiSurfBoard />
          </motion.div>
          <p>
           {aboutData[0]?.philosophy}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About