import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className = "absolute pt-36 px-24 pt-[20%] space-y-6  bg-gradient-to-r from-black to-transparent aspect-video w-screen ">
      <h1 className='text-4xl font-bold w-1/4 text-white'>{title}</h1>
      <p className = "py-6 text-lg w-1/4 text-white">{overview}</p>
      <div className = "space-x-4 ">
        <button className='bg-white text-black px-16 py-2 text-xl bg-opacity-50 rounded'>Play  </button>
        <button className='bg-gray-600 text-white px-16 py-2 text-xl bg-opacity-50 rounded'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle