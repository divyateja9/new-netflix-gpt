import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ title, posterPath }) => {
  console.log("Moviecard", IMG_CDN + posterPath)
  return (
    <div className="pr-4 w-48">
      <img src={IMG_CDN + posterPath} alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;
