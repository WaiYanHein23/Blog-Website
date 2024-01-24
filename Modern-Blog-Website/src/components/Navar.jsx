import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {FaBars, FaFacebook, FaInstagram, FaTelegram, FaXmark} from 'react-icons/fa6'

const Navar = () => {
    //nav items
    const navItems=[
        {path:"/",link:"Home"},
        {path:"/about",link:"About"},
        {path:"/blogs",link:"Blogs"},
        {path:"/contact",link:"Contact"},
        {path:"/services",link:"Services"},
    ]
    const [isSubmit, setIsSubmit] = useState(false);
    
    //navigate
    const navigator=useNavigate();

  return (
    <header className='bg-black text-white fixed top-0 right-0 left-0'>
        <nav className='px-4 py-4 mx-auto max-w-7xl flex justify-between items-center'>
            <a href='/' className='text-xl text-white font-bold'>Design <span className='text-orange-600'>DK</span></a>
            {/* //nav items for lg devices// */}
            <ul className='md:flex gap-12 text-lg hidden'>
                {navItems.map(({path,link})=><li key={path} className='text-white'>
                    <NavLink 
                    className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
                     to={path}>{link}</NavLink>
                </li>)}
            </ul>
            <div className='text-white lg:flex gap-4 items-center hidden'>
                <a href='/' className='text-white hover:text-orange-600 m-2 text-lg'><FaFacebook/></a>
                <a href='/' className='text-white hover:text-orange-600 m-2 text-lg'><FaInstagram/></a>
                <a href='/' className='text-white hover:text-orange-600 m-2 text-lg'><FaTelegram/></a>
                <button onClick={()=>navigator('/login')} className='bg-blue-600 hover:bg-orange-600 px-1 py-1 rounded-sm m-1 transition-all duration-200 text-white'>Login</button>
            </div>

            <div className='md:hidden'>
            <button onClick={()=>setIsSubmit(!isSubmit)} className='text-white cursor-pointer'>{isSubmit ?<FaXmark/>:<FaBars/>}</button>
            </div>
        </nav>
        {/* menu items only for mobile */}
        <div>
             <ul className={`md:hidden block  gap-12 text-lg uu space-y-4 px-4 py-4 mt-14 bg-white ${isSubmit?"":"hidden"}`}>
                {navItems.map(({path,link})=><li key={path} className='text-black'>
                    <NavLink onClick={()=>setIsSubmit(!isSubmit)} to={path}>{link}</NavLink>
                </li>)}
            </ul>
        </div>
    </header>
  )
}

export default Navar