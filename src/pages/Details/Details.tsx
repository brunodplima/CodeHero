import React, { useEffect, useState } from 'react'

import './Details.css'
import api from '../../services/api'
import DetailsMedia from '../../components/DetailsMedia/DetailsMedia'

interface DetailsProps {
  match: { params: { heroId: number } },
}

interface CharacterInterface {
  name: string,
  description: string,
  picture: string,
  series: Array<string>,
  events: Array<string>,
}

const Details: React.FC<DetailsProps> = (props) => {
  const { match: { params: { heroId } } } = props

  const [character, setCharacter] = useState<CharacterInterface|null>(null)

  useEffect(() => {
    api.get(`characters/${heroId}`).then((response) => {
      const data = response.data.data.results[0]

      const foo:CharacterInterface = {
        name: data.name,
        description: data.description,
        picture: `${data.thumbnail.path}.${data.thumbnail.extension}`,
        series: data.series.items.map((item: any) => (item.resourceURI)),
        events: data.events.items.map((item: any) => (item.resourceURI)),
      }

      setCharacter(foo)
    })
  }, [heroId])

  return character && (
    <div id="app-details">
      <div className="details-card-wrapper">
        <div className="details-card">
          <div className="column details-text">
            <h1>{character.name}</h1>
            <p>{character.description}</p>
          </div>
          <img className="column details-picture" src={character.picture} alt={character.name} />
        </div>
      </div>
      <div className="details-medias">
        <fieldset>
          <legend>
            <h2>Séries</h2>
          </legend>
          <div className="details-medias-items">
            {
              character.series.map((item, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <DetailsMedia key={key} url={item} />
              ))
            }
          </div>
        </fieldset>
      </div>
      <div className="details-medias">
        <fieldset>
          <legend>
            <h2>Eventos</h2>
          </legend>
          <div className="details-medias-items">
            {
              character.events.map((item, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <DetailsMedia key={key} url={item} />
              ))
            }
          </div>
        </fieldset>
      </div>
    </div>
  )
}

export default Details
