import React, { useState, useEffect } from 'react'
import { client } from '../../client'
import { motion } from 'framer-motion';
import { TeamCard, TypingText } from '../../components';
import { staggerContainer, fadeIn } from '../../utils/motion';

import './Team.scss'

const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const query = '*[_type == "team"]';

    client.fetch(query).then((data) => {
      setTeamData(data)

    })
  }, [])

  return (
    <section id='Team'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="team__container"
      >
        <TypingText title="Meet the Team" />
        <motion.div
          className='team__subtitle-container'
          variants={fadeIn('up', 'tween', 0.2, 1)}
        >
          <p className='team__subtitle'>
            We have a talented and dedicated team of professionals
            who are passionate about delivering great results for
            our clients. Learn more about them below.
          </p>
        </motion.div>

        <div className='team__card-container'>
          {teamData.map((data) => (
            <TeamCard key={data._id} teamData={data} />
          )
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default Team
