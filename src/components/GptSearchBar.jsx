import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch();
  const language = useSelector((state) => state.config.lang);
  const gptSearchTextRef = useRef(null);

  const searchMovieTMDB = async (movie) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&language=en-US&page=1`,
    API_OPTIONS
  );
  const data = await response.json();
  dispatch(setGptMovies(data.results));
  return data.results;
};


  const handleGPTSearchClick = async () => {
    // Handle GPT Search button click
    console.log("GPT Search button clicked");
    console.log("Search Text: ", gptSearchTextRef.current.value);
    // You can add your GPT search logic here
    const gptQuery =
      "Act as a movie recommendation engine. Recommend 5 movies similar to Inception with comma separated:" +
      gptSearchTextRef.current.value;

    // const response = await openai.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //  messages: [
    //         {
    //             role: "user",
    //             content: gptQuery,
    //         },
    //     ],
    // //   messages: [
    // //     {
    // //       role: "user",
    // //       content: gptQuery,
    // //     },
    // //   ],
    // });

    //  if (response.status === 429) {
    //       const retryAfter = response.headers.get("Retry-After") || 1;
    //       await new Promise((resolve) => setTimeout(resolve, retryAfter * 5000));
    //       return handleGPTSearchClick(); // Retry the request after waiting
    //     }

    //  Open AI is not returning 200 so using dummy data for now
    let dummyMovies = [
      "Andaz Apna Apna",
      "3 Idiots",
      "PK",
      "Dangal",
      "Taare Zameen Par",
    ];
   const tmdbMovies=   dummyMovies.map(async (movie) => {
      return  searchMovieTMDB(movie);

    });
           const allMovies = await Promise.all(tmdbMovies);
      console.log(allMovies);
      dispatch(setGptMovies({ movieNames: dummyMovies, allMovies: allMovies }));
  };
  return (
    <div className="pt-[8%] pl-[20%]">
      <form
        className=" w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => {
          e.preventDefault();
          //handle form submit
        }}
      >
        const gptSearchRef = useRef(null);
        <input
          type="text"
          ref={gptSearchTextRef}
          className="p-4 m-4 col-span-9"
          placeholder={lang[language].gptPlaceHolder}
        />
        <button
          className="px-2 py-2 bg-red-700 text-white col-span-3 m-4"
          onClick={handleGPTSearchClick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};


export default GptSearchBar;
