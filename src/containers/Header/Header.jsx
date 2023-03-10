import React, { useState, useEffect } from 'react';

import headerImage from '../../assets/header-img.jpg'
import { motion } from 'framer-motion';
import { headerVariants } from '../../utils/motion';
import { client } from '../../client';
import './Header.scss';

const Header = () => {
  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    const query = '*[_type == "header"]';
    
    client.fetch(query).then((data) => {
      setHeaderData(data);
    });
  }, []);

  return (  
          <section className="hero-banner">
            <motion.div className="hero-banner__content">
              <motion.h1 className="hero-banner__title" variants={headerVariants} initial="hidden" animate="show">
                {headerData[0]?.taglineBig}
              </motion.h1>
              <motion.p className="hero-banner__subtitle" variants={headerVariants} initial="hidden" animate="show">
                {headerData[0]?.taglineSmall}
              </motion.p>
              <motion.a href="#Lessons" className="hero-banner__cta-button" variants={headerVariants} initial="hidden" animate="show">
                Book Now
              </motion.a>
            </motion.div>
            <img src={headerImage} alt="Surfers catching a wave" className="hero-banner__image" />
          </section>
  )
}

export default Header

