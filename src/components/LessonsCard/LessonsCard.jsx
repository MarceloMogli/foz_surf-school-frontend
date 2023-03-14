import React from 'react'
import { urlFor } from '../../client';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import './LessonsCard.scss'

const LessonsCard = (lessonData) => {
    console.log(lessonData);
    const { details, name, numlessons, price, imgUrl, groupSize } = lessonData?.lessonData
    return (
        <motion.div 
            variants={fadeIn('right', 'easeInOut', 0.5, 0.75)}
        className="lesson__card">
            <div className="lesson-card__image">
                <img src={urlFor(imgUrl)} alt={name} />
            </div>
            <div className='lesson__card-body'>
                <h3 className="lesson__card-title">{name}</h3>
                <p className="lesson__card-text"><span className='lesson__span-text'>Num of Lessons:</span> {numlessons}</p>
                <p className="lesson__card-text">{details}</p>
                <p className="lesson__card-text"><span className='lesson__span-text'>Group Size:</span> {groupSize}</p>
                <p className="lesson__card-text"><span className='lesson__span-text'>Price:</span> {price}</p>
            </div>
        </motion.div>
    )
}

export default LessonsCard