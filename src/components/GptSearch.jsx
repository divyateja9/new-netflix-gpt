import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
          <div className="absolute -z-10">
        <img
          src={BG_URL}
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/US-en-20250901-TRIFECTA-perspective_a7b980b6-8e93-4f18-9a62-56d5812c4956_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/US-en-20250901-TRIFECTA-perspective_a7b980b6-8e93-4f18-9a62-56d5812c4956_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/US-en-20250901-TRIFECTA-perspective_a7b980b6-8e93-4f18-9a62-56d5812c4956_small.jpg 959w"
          alt=""
          aria-hidden="true"
          class="default-ltr-iqcdef-cache-19j6xtr"
        ></img>
      </div>
        <GptSearchBar />
    <GptMovieSuggestions /></div>
  )
}

export default GptSearch