import React, { useEffect, useState } from 'react'
import api from '../../services/api'

interface DetailsMediaProps {
  url: string,
}

const DetailsMedia: React.FC<DetailsMediaProps> = (props) => {
  const { url } = props

  const [picture, setPicture] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    api.get(url).then((response) => {
      const data = response.data.data.results[0]
      setPicture(`${data.thumbnail.path}.${data.thumbnail.extension}`)
      setTitle(data.title)
    })
  }, [url])

  return (
    <div className="details-media">
      <img className="picture" src={picture} alt={title} />
      <span className="title">{title}</span>
    </div>
  )
}

export default DetailsMedia
