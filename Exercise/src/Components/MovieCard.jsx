import { StarIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({movie}) => {
    const navigate=useNavigate()
  return (
    <div className='flex flex-col justify-between p-3 w-66  bg-gray-800 rounded-2xl hover:-translate-y-1 transition-all duration-300 '>
        <img onClick={()=>{navigate(`/MovieDetails/${movie.id}`)}}
        src={movie.poster_path} alt="" className='rounded-lg h-52 w-full object-right-bottom cursor-pointer' />

        <p className='font-semibold mt-2 truncate'> {movie.title}</p>
        <p className='text-sm text-gray-40 mt-2'> 
            {new Date(movie.release_date).getFullYear()} . {movie.genres.slice(0,2).map(genre=> genre.name).join(" | ")}
        </p>

        <div className='flex items-center justify-between gap-1 text-sm text-gray-400 mt-5 pr-1'>
            <button onClick={()=>{navigate(`/MovieDetails/${movie.id}`)}} className='px-4 py-2 text-xs bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'> Buy Ticket</button>
            <p className='flex items-center gap-1 text-sm text-white h mt-1 pr-1'>
                <StarIcon className='w-4 h-4 text-primary fill-primary'/>
                {movie.vote_average.toFixed(1)}
            </p>
        </div>
    </div>
  )
}

export default MovieCard