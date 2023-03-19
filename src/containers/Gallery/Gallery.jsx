import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import TypingText from '../../components/TypingText/TypingText'
import { staggerContainer, fadeIn } from '../../utils/motion'
import { client, urlFor } from '../../client';

import './Gallery.scss'

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const query = '*[_type == "gallery"]';

    client.fetch(query).then((data) => {
      setGalleryData(data);
    });
  }, []);

  return (
    <section id="Gallery" className='gallery__container'>
      <motion.div className='gallery__title-container'
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}>
        <TypingText title="Gallery" />
        <motion.div
          className='subtitle-container'
          variants={fadeIn('up', 'tween', 0.2, 1)}
        >
          <p className='gallery__subtitle'>
            Discover the beauty and excitement of surfing with us.
            Check out our gallery to see stunning images of our surf school in action.
          </p>
        </motion.div>
      </motion.div>
      <div className='marquee'>
        <div className='gallery__images-container track'>
          {galleryData.map((data) => <img className='gallery__image' src={urlFor(data.imgUrl)} alt={data.desc} key={data._id} />)}
        </div>
      </div>
    </section>
  )
}

export default Gallery