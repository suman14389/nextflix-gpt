import React from 'react'

const MovieCard = ({posterPath}) => {
  return (
    <img alt="movie card" src={posterPath} className='w-48'/>
  )
}

export default MovieCard