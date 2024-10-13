import { useEffect, useMemo } from "react";
import { TMDB_API_OPTIONS } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideoDetails } from "../storeSlices/nowPlayingMovies";

const useGetTrailerVideoDetails = () => {
    const dispatch = useDispatch();
    const trailerDetails = useSelector(store => store.nowPlayingMovies.trailerMovieDetails);
    
 useEffect(() => async () => {
    if(!trailerDetails) return;
    const response = await fetch(`https://api.themoviedb.org/3/movie/${trailerDetails.id}/videos?language=en-US`, TMDB_API_OPTIONS)
    const data = await response.json();
    const filterDataByTrailer = data.results.filter(video => video.type === "Trailer");
    const trailer = filterDataByTrailer.length > 0 ? filterDataByTrailer[0] : data.results[0];
    dispatch(addTrailerVideoDetails(trailer));
 }, [trailerDetails]);
}

export default useGetTrailerVideoDetails;