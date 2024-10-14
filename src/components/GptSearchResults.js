import React from 'react'
import MovieList from './MovieList'

const GptSearchResults = ({movies, movieNames, searchText}) => {

  return (
    <div className='absolute md:top-1/4 top-[18%] md:w-11/12 w-[95%] bg-black/90 text-white md:mx-16 mx-2 my-20 p-4'>
        {
            !searchText && <h1 className='md:text-4xl text-xl text-purple-600 md:py-4 py-2 text-center underline'> Past searched movies</h1>
        }
        {
            movieNames.map((movieName, index) => movies[index]?.results?.length && <MovieList key={movieName} title={movieName} movies={movies[index].results}/>)
        }
    </div>
  )
}

export default GptSearchResults