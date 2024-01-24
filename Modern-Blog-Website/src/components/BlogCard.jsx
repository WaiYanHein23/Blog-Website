import React from 'react'
import {Link} from 'react-router-dom'
import {FaUser} from 'react-icons/fa'

const BlogCard = ({blogs,currentPage,pageSize,selectCategory}) => {
    const filterBlog=blogs
    .filter((blogs)=>!selectCategory || blogs.category===selectCategory)
    .slice((currentPage -1)*pageSize,currentPage*pageSize);
  return (
    <div className='py-2 border-b-2 border-spacing-2 grid md:grid-cols-6 gap-4 w-100'>{filterBlog.map((data)=><Link to={`/singleblogs/${data.id}`} className='w-full ml-10 shadow-lg cursor-pointer' key={data.id}>
    <div>
        <img src={data.image} alt='' className='w-full' />
    </div>
    <h3 className='my-2 hover:text-blue-500'>{data.title}</h3>
    <p className='text-lg mt-2 mb-4 text-gray-600'><FaUser className=' inline-flex mr-2 cursor-pointer'/>{data.author}</p>
    <p className='mt-1'>Published:{data.published_date}</p>
    </Link>)}
    
    </div>
  )
}

export default BlogCard