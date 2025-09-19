import React from 'react';
import lang from "../utils/languageConstants";
import { useSelector } from 'react-redux';


const GptSearchBar = () => {
    const language = useSelector((state) => state.config.lang);
  return (
    <div className="pt-[8%] pl-[20%]">

        <form className= " w-1/2 bg-black grid grid-cols-12">
            <input type ="text" className="p-4 m-4 col-span-9" placeholder = {lang[language].gptPlaceHolder} />
            <button className="px-2 py-2 bg-red-700 text-white col-span-3 m-4">{lang[language].search}</button>    
           </form>
    </div>
  )
}

export default GptSearchBar