import React from 'react'

import HeroCard from './HeroCard'

import './HeroList.css'
import { HeroCardProps } from './types'

interface HeroListProps {
  list: Array<HeroCardProps>,
}

const HeroList: React.FC<HeroListProps> = (props) => {
  const { list } = props

  return (
    <div id="hero-list">
      <div className="hero-list-header">
        <div className="column column-padding-left-small"> Personagem </div>
        <div className="column hide-small"> Séries </div>
        <div className="column hide-small"> Eventos </div>
      </div>
      {
        list.map((hero) => (
          <HeroCard
            key={hero.id}
            id={hero.id}
            picture={hero.picture}
            name={hero.name}
            series={hero.series}
            events={hero.events}
          />
        ))
      }
    </div>
  )
}

export default HeroList
