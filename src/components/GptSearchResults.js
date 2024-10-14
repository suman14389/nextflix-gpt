import React from 'react'
import MovieList from './MovieList'

const GptSearchResults = ({movies, movieNames, searchText}) => {

  return (
    <div className='absolute top-1/4 w-11/12 bg-black/90 text-white mx-16 my-20 p-4'>
        {
            !searchText && <h1 className='text-4xl text-purple-600 py-4 text-center underline'> Previously searched movies</h1>
        }
        {
            movieNames.map((movieName, index) => movies[index]?.results?.length && <MovieList key={movieName} title={movieName} movies={movies[index].results}/>)
        }
    </div>
  )
}

export default GptSearchResults