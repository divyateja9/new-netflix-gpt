import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const movieNames = useSelector((state) => state.gpt.movieNames);
  const gptMovies = useSelector((state) => state.gpt.gptMovies);

  if(!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white">
     
      {movieNames.map((name, index) => (
        <div key={index}>
          {/* <h3 className="text-white text-xl mb-2">{name}</h3> */}
          <MovieList title={name} movies={gptMovies ? gptMovies[index] : []} />
        </div>
      ))}
    </div>
  )
}

export default GptMovieSuggestions