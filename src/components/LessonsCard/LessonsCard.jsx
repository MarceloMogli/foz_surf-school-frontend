import React from 'react'
import { urlFor } from '../../client';
import './LessonsCard.scss'

const LessonsCard = (lessonData) => {
    console.log(lessonData);
    const { details, name, numlessons, price, imgUrl } = lessonData?.lessonData
    return (
        <div className="lesson__card">
            <div className="lesson-card__image">
                <img src={urlFor(imgUrl)} alt={name} />
            </div>
            <div className='lesson__card-body'>
                <h3 className="lesson__card-title">{name}</h3>
                <p className="lesson__card-text">{details}</p>
                <p className="lesson__card-text">Num of Lessons: {numlessons}</p>
                <p className="lesson__card-text">Price: {price}€</p>
            </div>
        </div>
    )
}

export default LessonsCard