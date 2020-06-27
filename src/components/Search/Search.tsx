/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent } from 'react'
import { DebounceInput } from 'react-debounce-input'
import ReactTooltip from 'react-tooltip'
import { GoSearch } from 'react-icons/go'

import './Search.css'

interface SearcProps {
  help: string,
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<SearcProps> = (props) => {
  const { help, value, onChange } = props
  return (
    <div id="search-field">
      <label>
        Nome do personagem
        <div className="input-container" data-tip={help}>
          <DebounceInput
            minLength={3}
            debounceTimeout={500}
            onChange={onChange}
            id="search-input"
            name="search-input"
            value={value}
            placeholder="Search"
            autoFocus
          />
          <div className="icon"><GoSearch /></div>
        </div>
        <ReactTooltip />
      </label>
    </div>
  )
}

export default Search
