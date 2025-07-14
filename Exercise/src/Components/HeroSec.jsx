import React from 'react'
import imageMarvel from '../assets/marvelLogo.svg'
import backgroundImage from '../assets/backgroundImage.png'
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function HeroSec() {
    const navigate=useNavigate();
  return (
    <div
      className={` flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 h-screen bg-cover `}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <img className='max-h-11 lg:h-11 mt-20' src={imageMarvel} alt="Marvel" />
      <h1 className='text-3xl md:text-[50px] md:leading-[4rem] font-semibold'>
        Guardians <br /> of the Galaxy
      </h1>
      <div className='flex flex-row  items-center  gap-5 text-gray-300'>
        <p> Action| Aventure | Sci-Fi</p>
        <p className='flex items-center gap-1'>
            <Calendar className='w-4.5 h-4.5'/>
            <span>2018 </span>
            </p>
        <p className='flex items-center gap-1'>
            <Clock className='w-4.5 h-4.5'/>
            2h 8m</p>
      </div>
      <div className='text-[12px] flex-wrap max-w-md'>
        In a post-apocalyptic world where cities ride
         on wheels and consume each other to survuce.
      </div>

        <button onClick={()=>navigate('/Movies')} className=' flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'> 
            Explore Movie
            <ArrowRight className='w-4.5 h-4.5'/>
            </button>
        
    </div>
  )
}

export default HeroSec;
