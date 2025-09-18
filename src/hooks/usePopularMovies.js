import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import {setPopularMovies} from '../utils/moviesSlice';

 const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async() => {
  const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTIONS
  );
  const data = await response.json();
  return data.results;
};

useEffect(() => {
  getPopularMovies().then((movies) => {
    dispatch(setPopularMovies(movies));
  });
},[]);
  // Custom hook logic here
};
export default usePopularMovies;