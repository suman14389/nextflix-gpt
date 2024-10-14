import React from 'react'

const MovieCard = ({posterPath}) => {
  return (
    <img alt="movie card" src={posterPath} className='md:w-48 w-36'/>
  )
}

export default MovieCard