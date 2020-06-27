import React, { useState, ChangeEvent, useEffect } from 'react'
import api from '../../services/api'
import { HeroCardProps } from '../../components/HeroList/types'

import Search from '../../components/Search/Search'
import HeroList from '../../components/HeroList/HeroList'

const Home = () => {
  const [searchState, setSearchState] = useState('')
  const [items, setItems] = useState<HeroCardProps[]>([])

  useEffect(() => {
    api.get('').then((response) => {
      const newItems = response.data.data.results.map((result: any) => {
        const {
          id, name, series, events
        } = result

        return {
          id,
          name,
          picture: `${result.thumbnail.path}.${result.thumbnail.extension}`,
          series: series.items.map((item: any) => item.name),
          events: events.items.map((item: any) => item.name),
        }
      })
      setItems(newItems)
    })
  }, [])

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value
    setSearchState(term)
  }

  return (
    <div className="app-home">
      <h1>Busca de personagens</h1>
      <Search
        value={searchState}
        onChange={handleSearch}
      />
      <HeroList
        list={items}
      />
    </div>
  )
}

export default Home
