import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.jpg";
import { Menu, SearchIcon, XIcon } from 'lucide-react'
import { useState } from 'react';
import { useClerk,UserButton,useUser } from '@clerk/clerk-react';
const Header = () => {
  
    const [isOpened,setopnend]=useState(false)
    const {user} =useUser()
    const {openSignIn}=useClerk()
  return (
    <div className='flex flex-row justify-around w-full top-0 left-0 z-50 px-6 lg:px-36 py-5'>
    
      <Link to='/' className='max-md:flex-1'>
        <img src={logo} alt="Logo" className='w-18 h-auto' />
      </Link> 
      

      <div className={`$ max-md:absolute max-md:top-0 max-md:left-0 
      max-md:font-medium max-md:text-lg z-50 flex flex-col 
      md:flex-row items-center max-md:justify-center gap-8 
      min-md:px-8 py-3 max-md:h-screen min-md:rounded-full 
      backdrop-blur bg-black/70 md:bg-white/10 md:border
       border-gray-300/20 overflow-hidden 
      transition-[width] duration-300  ${isOpened ? 'max-md:w-100': 'max-md:w-0'} `}>
        <XIcon onClick={()=>setopnend(false)} className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer'/>
        <Link onClick={()=>{scrollTo(0,0);setopnend(false)}} to ='/'>
            Home
        </Link>
          <Link onClick={()=>{scrollTo(0,0);setopnend(false)}} to ='/Movies'>
            Movies
        </Link>
           <Link onClick={()=>{scrollTo(0,0);setopnend(false)}} to ='/Favouirte'>
            Favouirte
        </Link>
      </div>

      <div className='flex items-center gap-8'>
        <SearchIcon  className='max-md:hidden w-6 h-6 cursor-pointer'/>
          {  !user ? (
        <button onClick={openSignIn} className=' px-4 py-1 sm:px-7 bg-sky-500 hover:bg-sky-700 transition rounder-full font-medium rounded-2xl cursor-pointer'> Login</button>
          ): ( 
            <UserButton/>
          )
        }
      </div>

      <Menu onClick={()=> setopnend(!isOpened)} className='max-md:ml-4 md:hidden w-8 h-8 cursor-pointer' />
    </div>
  );
}

export default Header;
