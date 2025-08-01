import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import ReactPlayer from 'react-player'
import { PlayCircleIcon, Triangle } from 'lucide-react'
const TrailerSection = () => {
    const [cuurentTrailer,setCurrentTrailer]=useState(dummyTrailers[0])
  return (
    <> 
    <div className='px-6 md:px-16 lg:px-24 py-20 overflow-hidden'>
      <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'> Trailer </p>
      <div className='relative mt-6'> 
    <ReactPlayer controls={true} className='mx-auto max-w-full' width="960px" height="540px" src={cuurentTrailer.videoUrl}  />
    </div>
    <div className='group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto'>
           {dummyTrailers.map((trailer)=>(
             <div onClick={()=>(setCurrentTrailer(trailer))} key={Triangle.image} className='relative group-hover:not-hover:opacity-50  '>
                <img src={trailer.image} alt='trailer' className='rounded-lg w-full h-full object-cover brighness-75' />
                <PlayCircleIcon strokeWidth={1.6} className='absolute top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 trnsform -translate-x-1/2 -translate-y-1/2'/>
             </div>
           ))}
    </div>
    </div>
    </>
  )
}

export default TrailerSection