import React from 'react'

import './HeroCard.css'
import { HeroCardProps } from './types'

const HeroCard: React.FC<HeroCardProps> = (props) => {
  const {
    picture, name, series, events
  } = props
  return (
    <div className="hero-card">
      <div className="column hero-profile">
        <div className="img-wrapper">
          <img src={picture} alt="Hero" />
        </div>
        <strong>{name}</strong>
      </div>
      <div className="column hide-small">
        {
          series.map((serie: string, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={index}>{serie}</p>
          ))
        }
      </div>
      <div className="column hide-small">
        {
          events.map((event: string, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={index}>{event}</p>
          ))
        }
      </div>
    </div>
  )
}

export default HeroCard
