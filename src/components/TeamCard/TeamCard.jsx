import React from 'react'
import { urlFor } from '../../client'

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

import './TeamCard.scss'

const TeamCard = (teamData) => {
    const { imgurl, name, role, details } = teamData?.teamData;
    return (
        <div
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
        </div>
    )
}

export default TeamCard