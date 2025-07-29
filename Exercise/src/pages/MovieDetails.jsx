import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {dummyDateTimeData, dummyShowsData} from '../assets/assets'
import { LoaderIcon } from 'lucide-react'

const MovieDetails = () => {
  const {id}=useParams()
  console.log(id)
  const [show,setShow]=useState(null)
  const getShow = async ()=>{
    console.log(dummyShowsData)
    const data =dummyShowsData.find(m=>m._id===id)
    setShow({
      movie:data,
      dateTime:dummyDateTimeData
    })
  }
  useEffect(()=>{
       getShow()
  },[id])

  return show ? (
    <div className='flex justify-between items-center '>
        <img className='rounded-full ' 
        src={show.movie.poster_path} alt={show.movie.title}/>  
         
    </div>




  ):
   (
    <div>
       <LoaderIcon></LoaderIcon>
    </div>
   )
}

export default MovieDetails