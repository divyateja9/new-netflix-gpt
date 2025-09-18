import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {

  return (
   <div className=" p-4 bg-transparent">
 <h2 className ="text-2xl py-6 text-white">{title}</h2>
   
    <div className = "flex overflow-x-scroll scrollbar-hide">

      <div className="flex border-solid border-white/20">       
        {movies?.map((movie) => (
          <MovieCard key={movie.id} title posterPath={movie.poster_path} />
        ))}
      </div>
        
    </div>
    </div>
  )
}

export default MovieList;