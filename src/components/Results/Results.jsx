import React, { useContext } from 'react'
import MovieSearch from '../API/MovieSearch'
import { SearchContext } from '../../context/SearchContext'

function Results() {
  const { query } = useContext(SearchContext);
  
  return (
    <div>
      <MovieSearch query={query} />
    </div>
  )
}

export default Results
