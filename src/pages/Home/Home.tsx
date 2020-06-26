import React, { useState, ChangeEvent } from 'react'

import Search from '../../components/Search/Search'
import HeroList from '../../components/HeroList/HeroList'

const Home = () => {
  const [searchState, setSearchState] = useState('')

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value
    setSearchState(term)
  }

  return (
    <div className="foo">
      <h1>Busca de personagens</h1>
      <Search
        value={searchState}
        onChange={handleSearch}
      />
      <HeroList />
    </div>
  )
}

export default Home
