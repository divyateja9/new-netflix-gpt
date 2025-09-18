import {useEffect} from "react";
import {useDispatch} from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = ({movieId}) => {
      const dispatch = useDispatch();
      const getMovieVideos = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();
        let trailer = json.results.find((video) => video.type === "Trailer");
        if (!trailer) trailer = json.results[0];
        dispatch(addTrailerVideo(trailer));
      };
       useEffect(() => {
    if (movieId) getMovieVideos();
  }, [movieId]);

}

export default useMovieTrailer;