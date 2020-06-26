import React, { ChangeEvent } from 'react'

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
      </label>
    </div>
  )
}

export default Search
