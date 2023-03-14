import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../../utils/motion'
import { TypingText } from '../../components'
import './Rentals.scss'

const Rentals = () => {
  return (
    <section id='Rentals'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="rentals__container"
      >
        <TypingText title="Rentals" />
        <motion.div
          className='rentals__subtitle-container'
          variants={fadeIn('up', 'tween', 0.2, 1)}
        >
          <p className='rentals__subtitle'>
            Our rental equipment is carefully maintained and regularly
            updated to ensure that you have the best experience possible.
            We offer a variety of surfboard sizes and styles to fit your skill
            level and preferred surfing conditions. In addition to surfboards, we
            also offer wetsuits, leashes, and other surf accessories.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Rentals