import React, { useState, useEffect } from 'react'
import { TypingText } from '../../components'
import { client } from '../../client'

import './Lessons.scss'
import LessonsCard from '../../components/LessonsCard/LessonsCard'

const Lessons = () => {
  const [lessonsData, setLessonsData] = useState([]);

  useEffect(() => {
    const query = '*[_type == "lessonPacks"]';

    client.fetch(query).then((data) => setLessonsData(data))
  }, [])

  return (
    <section id='Lessons'>
      <div
        className="lessons__container"
      >
        <TypingText title="Surf Lessons" />
        <div className='lessons__subtitle-container'>
          <p className='lessons__subtitle'>
            Join our experienced instructors for an unforgettable surfing experience.
            Our surf lessons are designed for beginners who want to learn the fundamentals
            of surfing or improve their skills. Classes last 2 hours and are available in
            private or group settings. Wetsuits and surfboards are provided. Book a lesson
            today and start catching waves like a pro!
          </p>
        </div>
        <div className='lessons__card-container'>
          {lessonsData.map((data) => <LessonsCard key={data._id} lessonData={data} />)}
        </div>
      </div>
    </section>
  )
}

export default Lessons