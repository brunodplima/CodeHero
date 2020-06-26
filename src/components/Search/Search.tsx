import React, { ChangeEvent } from 'react'
import { GoSearch } from 'react-icons/go'

import './Search.css'

interface SearcProps {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<SearcProps> = (props) => {
  const { value, onChange } = props
  return (
    <div id="search-field">
      <label htmlFor="search-input">
        Nome do personagem
        <div className="input-container">
          <input
            type="text"
            id="search-input"
            name="search-input"
            value={value}
            onChange={onChange}
            placeholder="Search"
              // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          />
          <div className="icon"><GoSearch /></div>
        </div>
      </label>
    </div>
  )
}

export default Search
