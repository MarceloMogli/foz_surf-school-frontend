import React from 'react'
import { motion } from 'framer-motion';
import { iconVariants, fadeIn } from '../../utils/motion';
import { urlFor } from '../../client';


import './RentalInfo.scss'

const RentalInfo = (rentalData) => {
    const { type, details, halfDayPrice, hourlyPrice, imgUrl, dailyPrice } = rentalData?.rentalData;
    return (
        <div className='rentals__content-container' >
            <motion.div className='rentals__image-container' variants={iconVariants('left')}>
                <img src={urlFor(imgUrl)} alt={type} />
            </motion.div>
            <motion.div className='rentals__info-container' variants={fadeIn('up', 'tween', 0.2, 1)}>
                <h3 className='rentals__text-title'>{type}</h3>
                <p className='rentals__details'>{details}</p>
                <p className='rentals__text'><span className='rentals__span-text'>Hourly Price: </span> {hourlyPrice}</p>
                <p className='rentals__text'><span className='rentals__span-text'>Half-Day Price: </span> {halfDayPrice}</p>
                <p className='rentals__text'><span className='rentals__span-text'>Daily Price: </span> {dailyPrice}</p>
            </motion.div>
        </div>
    )
}

export default RentalInfo