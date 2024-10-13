import React from 'react'
import MovieDetails from './MovieDetails'
import useGetTrailerVideoDetails from '../CustomHooks/useGetTrailerVideoDetails'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  useGetTrailerVideoDetails();
  const trailerVideoDetails = useSelector(store => store.nowPlayingMovies.trailerVideoDetails);
  return (
    <div className="w-screen h-screen aspect-video bg-gradient-to-r from-black">   
        <MovieDetails />
        <iframe
            className="w-screen h-screen aspect-video"
            src={"https://www.youtube.com/embed/" + trailerVideoDetails?.key + "?rel=0&showinfo=0&autoplay=1&mute=1&controls=0&modestbranding=1&vq=hd720"}
            title="YouTube video player"
            framebBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
        </iframe>
    </div>
  )
}

export default MainContainer