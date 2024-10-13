import { useEffect } from "react"
import { TMDB_API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../storeSlices/nowPlayingMovies";
import { UPCOMING_MOVIES_API_URL } from "../utils/Constants";

const useGetUpcomingMovies = () => {

    const dispatch = useDispatch();
    useEffect(() => async () => {
        const response = await fetch(UPCOMING_MOVIES_API_URL, TMDB_API_OPTIONS);
        const json = await response.json();

        console.log("json -2", json);
        
        dispatch(addUpcomingMovies(json.results));
    }, [])
}

export default useGetUpcomingMovies;