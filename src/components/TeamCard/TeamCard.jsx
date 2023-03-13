import React from 'react'
import { urlFor } from '../../client'
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

import './TeamCard.scss'

const TeamCard = (teamData) => {
    const { imgurl, name, role, details } = teamData?.teamData;
    return (
        <motion.div
            variants={fadeIn('right', 'easeInOut', 0.5, 0.75)}
            className='teamcard__container'
            id='teamCard-item'
            data-tooltip-id='teamCard-item'
            data-tooltip-content={details}>
            <img src={urlFor(imgurl)}
                alt={`${name}`}
                className='teamcard__img'
            />
            <h3 className='teamcard__name'>{name}</h3>
            <p className='teamcard__role'>{role}</p>
            <ReactTooltip id='teamCard-item' className='card-tooltip' />
        </motion.div>
    )
}

export default TeamCard