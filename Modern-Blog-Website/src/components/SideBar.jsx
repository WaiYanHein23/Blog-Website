import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [popularBlogs, setPopularBlogs] = useState([]);
    useEffect(()=>{
       fetch("http://localhost:3030/blogs").then((res)=>res.json()).then((res)=>setPopularBlogs(res.slice(0,5)))
    },[])
  return (
    <div>
    {/* Latest Blogs */}
        <div>
    <h1 className='text-xl px-4 font-semibold text-red-800'>Latest Blogs</h1>
    {
        popularBlogs.slice(0,3).map((data)=><div key={data.id} className=' border-b-4 shadow-md border-spacing-2'>
        <h3 className='mb-2'>{data.title}</h3>
        <Link className='text-blue-600 hover:text-red-600 px-2 py-2' to='/'>Read More</Link>
        </div>)
    }
    </div>

{/* Popular Blogs */}
    <div>
    <h1 className='text-xl px-4 font-semibold text-red-800 mt-3'>Popular Blogs</h1>
    {
        popularBlogs.slice(3,10).map((data)=><div key={data.id} className=' border-b-4 shadow-md border-spacing-2'>
        <h3 className='mb-2'>{data.title}</h3>
        <Link className='text-blue-600 hover:text-red-600 px-2 py-2' to='/'>Read More</Link>
        </div>)
    }
    </div>
    </div>
  )
}

export default SideBar