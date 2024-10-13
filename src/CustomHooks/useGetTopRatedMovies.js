import { useEffect } from "react"
import { TMDB_API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../storeSlices/nowPlayingMovies";
import { TOP_RATED_MOVIES_API_URL } from "../utils/Constants";

const useGetTopRatedMovies = () => {

    const dispatch = useDispatch();
    useEffect(() => async () => {
        const response = await fetch(TOP_RATED_MOVIES_API_URL, TMDB_API_OPTIONS);
        const json = await response.json();

        console.log("json -1", json);
        
        dispatch(addTopRatedMovies(json.results));
    }, [])
}

export default useGetTopRatedMovies;