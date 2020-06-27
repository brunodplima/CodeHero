import React from 'react'
import {
  FiChevronsLeft, FiChevronLeft, FiChevronRight, FiChevronsRight
} from 'react-icons/fi'

import './Paginator.css'

interface PaginatorProps {
  offset: number,
  limit: number,
  total: number,
  onClickCallback: (page: number) => void
}

const Paginator: React.FC<PaginatorProps> = (props) => {
  const {
    offset,
    limit,
    total,
    onClickCallback,
  } = props

  const page = Math.floor(offset / limit) + 1
  const last = Math.floor(total / limit)

  const min = Math.max(1, page - 2)
  const max = Math.min(page + 2, last)

  const buttons = []
  for (let i = min; i <= max; i++) {
    buttons.push(i)
  }

  return (
    <div className="paginator">
      {
        page > 1 && <button onClick={(() => onClickCallback(1))} type="button" aria-label="Primeira" className="arrow"> <FiChevronsLeft /> </button>
      }
      {
        page > 1 && <button onClick={(() => onClickCallback(page - 1))} type="button" aria-label="Anterior" className="arrow"> <FiChevronLeft /> </button>
      }
      {
        buttons.map((index: number) => (
          <button onClick={(() => onClickCallback(index))} key={index} type="button" className={`button${page === index ? ' active' : ''}`} aria-label={index.toString()}>{index}</button>
        ))
      }
      {
        page < last && <button onClick={(() => onClickCallback(page + 1))} type="button" aria-label="Próxima" className="arrow"> <FiChevronRight /> </button>
      }
      {
        page < last && <button onClick={(() => onClickCallback(last))} type="button" aria-label="Última" className="arrow"> <FiChevronsRight /> </button>
      }
    </div>
  )
}

export default Paginator
