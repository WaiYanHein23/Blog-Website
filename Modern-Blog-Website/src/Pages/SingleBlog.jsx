import React from 'react'
import SideBar from '../components/SideBar';
import { FaClock, FaUser } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom'

const SingleBlog = () => {
    const data=useLoaderData();
    const {title,image,category,author,published_date,reading_time,content}=data;
    
  return (
    <div> <div className='py-28 px-4 bg-gray-600 text-center'>
    <h1 className='text-5xl lg-text-7xl mb-3 text-yellow-600 leading-snug font-bold'>Single Blog</h1>
  </div>
  {/* blogs details */}
  <div className='max-w-5xl mx-auto my-12 grid grid-cols-3 gap-2'>
    <div className='w-full mx-auto shadow-md border-spacing-2 p-6'>
        <div className=''>
            <img src={image} className='w-full mx-auto rounded-md'/>
        </div>
        <p className='text-xl font-bold'>{category}</p>
        <h2 className='text-lg hover:text-red-700'>{title}</h2>
        <p><FaUser className='inline-flex items-center mr-2' />{author} | {published_date}</p>
        <p><FaClock className='inline-flex items-center mr-2' />{reading_time}</p>
        <p className='text-blue-500 m-2'>{content}</p>
        <div>
          <p className='px-2 py-2 m-2 text-gray-800'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
    </div>
    <div className='w-full'>
     <SideBar/>
    </div>
  </div>
  </div>
  )
}

export default SingleBlog