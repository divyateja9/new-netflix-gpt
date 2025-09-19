import MovieList from "./MovieList";
import React from 'react'
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div className="bg-black">

   
    <div className="-mt-52 relative z-10 ">
      <MovieList title = "Now Playing" movies = {movies.nowPlayingMovies} />
   <MovieList title = "Trending" movies = {movies.nowPlayingMovies} />
      <MovieList title = "Popular" movies = {movies.popularMovies} />
         <MovieList title = "Upcoming" movies = {movies.nowPlayingMovies} />
    </div>
     </div>
  )
}
export default SecondaryContainer