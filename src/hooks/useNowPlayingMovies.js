import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import {setNowPlayingMovies} from '../utils/moviesSlice';

 const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async() => {
  const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS 
  );
  const data = await response.json();
  return data.results;
};

useEffect(() => {
  getNowPlayingMovies().then((movies) => {
    dispatch(setNowPlayingMovies(movies));
  });
},[]);
  // Custom hook logic here
};
export default useNowPlayingMovies;