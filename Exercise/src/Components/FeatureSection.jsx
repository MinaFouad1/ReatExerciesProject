import { ArrowRight, Loader2Icon, LoaderIcon } from 'lucide-react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {dummyShowsData} from '../assets/assets'
import MovieCard from './MovieCard';
const FeatureSection = () => {
    const navigate =useNavigate();
    const [data, setData] = useState(dummyShowsData.slice(0, 4));
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); // start from page 1 (next batch)

  const fetchData  = () => {
    setLoading(true);
    const newItems = dummyShowsData.slice(page * 4, (page + 1) * 4);
    
    setData(prevData => [...prevData, ...newItems]);
    setPage(prevPage => prevPage + 1);
    
    setTimeout(() => {
    setLoading(false);
  }, 0);
  };
    return (
    <div className='px-6 md:px-16 lg:px-4 xl:px-44 overflow-hidden'>
       
       <div className='relative flex items-center justify-between pt-20 pb-10'>
             <p className='text-gray-300 font-medium text-lg'> Now showing 
             </p>
                <button onClick={()=> navigate('/Movies')} className='group flex flex-row items-center justify-between text-sm text-gray-300'>
                    <p> view all </p>
                    <ArrowRight className='group-hover:translate-x-0.5 transition w-4.5 h-4.5'/>
                </button>
       </div>
    
           <div className='flex flex-wrap max-sm:justify-center gap-8 mt-8'>
                { data.map((show)=> 
                  ( <MovieCard key={show._id} movie={show} />))}
           </div>

           <div className='flex justify-center items-center mt-20 '>
                 <button disabled={loading || page *4 >= dummyShowsData.length} onClick={fetchData } className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full cursor-pointer '>
                     {loading ? <Loader2Icon/> : 'Show More'}
                 </button>
           </div>
    </div>
  )
}

export default FeatureSection