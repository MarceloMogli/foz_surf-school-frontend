import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../../utils/motion'
import TypingText from '../../components/TypingText/TypingText'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactIcon from '../../assets/chat.png'

import './ContactUs.scss'

const ContactUs = () => {

  return (
    <section id="Bookings" className='contact__container'>
      <motion.div className='contact__title-container'
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}>
        <TypingText title="Get in Touch" />
        <motion.div
          className='subtitle-container'
          variants={fadeIn('up', 'tween', 1, 1)}
        >
          <p className='contact__subtitle'>
            Don't hesitate to contact us with any questions
            or concerns you may have. We're always happy to hear
            from you and help you take the next steps towards your
            surfing goals. Fill out the form below or give us a call
            to book your lesson or rental
          </p>
        </motion.div>
        <div className='contact__form-wrapper'>
          <motion.div className='contact__call-card' variants={fadeIn('right', 'easeInOut', 0.2, 1)}>
            <img src={ContactIcon} alt="contact phone" />
            <div className='contact__card-text'>
              <label className='contact__form-subtitle'>Give Us a Call</label>
              <br />
              <a href="tel: +351964556778" className="p-text">
                964 556 778
              </a>
              <br />
              <a href="tel: +351233567327" className="p-text">
                233 567 327
              </a>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('left', 'easeInOut', 0.1, 1)}>
            <ContactForm />
          </motion.div>
        </div>

      </motion.div>
    </section>
  )
}

export default ContactUs