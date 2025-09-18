import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(state => state.movies.nowPlayingMovies);
    if(!movies) return null;
    const mainMovie = movies[0];
    const {title,overview} = mainMovie;
  return (
    <div>
      <VideoTitle title={title} overview={overview} />
        <VideoBackground movieId = {mainMovie.id } />
    </div>
  )
};

export default MainContainer;