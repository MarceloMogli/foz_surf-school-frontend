import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../../utils/motion'
import { TypingText } from '../../components'
import { client } from '../../client'
import RentalInfo from '../../components/RentalInfo/RentalInfo'

import './Rentals.scss'


const Rentals = () => {
  const [rentalData, setRentalData] = useState([]);

  useEffect(() => {
    const query = '*[_type == "rentals"]';

    client.fetch(query).then((data) => setRentalData(data))
  }, [])

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
        <div className='rentals__data-container'>
        {rentalData.map((data) => <RentalInfo key={data._id} rentalData={data} />)}
        </div>
      </motion.div>
    </section>
  )
}

export default Rentals