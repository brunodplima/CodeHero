import React, { useState, ChangeEvent, useEffect } from 'react'
import api from '../../services/api'
import { HeroCardProps } from '../../components/HeroList/types'

import Search from '../../components/Search/Search'
import HeroList from '../../components/HeroList/HeroList'
import Paginator from '../../components/Paginator/Paginator'

import './Home.css'

interface QueryParams {
  offset: number,
  limit: number,
  nameStartsWith: string|null
}

const Home = () => {
  const limit = 10

  const [searchState, setSearchState] = useState('')
  const [items, setItems] = useState<HeroCardProps[]>([])
  const [offset, setOffset] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const params = { offset, limit } as QueryParams
    if (searchState.length > 0) {
      params.nameStartsWith = searchState
    }

    api.get('characters', { params }).then((response) => {
      const { data } = response.data
      const newItems = data.results.map((result: any) => {
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
      setOffset(data.count > 0 ? data.offset : 0)
      setTotal(data.total)
    })
  }, [offset, searchState])

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value
    setSearchState(term)
  }

  const handlePageChange = (page: number) => {
    setOffset((page - 1) * limit)
  }

  return (
    <div id="app-home">
      <div className="main-container-wrapper">
        <div className="main-container">
          <h1>Busca de personagens</h1>
          <Search
            help="API says: [nameStartsWith] Return characters with names that begin with the specified string (e.g. Sp)."
            value={searchState}
            onChange={handleSearch}
          />
          <HeroList
            list={items}
          />
        </div>
      </div>
      {
        total > 0
        && (
        <Paginator
          offset={offset}
          limit={limit}
          total={total}
          onClickCallback={handlePageChange}
        />
        )
      }
    </div>
  )
}

export default Home
