import React from 'react'
import { FaGithub, FaTiktok, FaViber, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gray-500 px-10 py-12'>
    <div className='grid grid-cols-5 gap-10'>

    {/* footer */}
    <div>
            <p className='text-white text-xl font-bold'>Footer</p>
            <ul className='mt-2 space-y-3'>
                <li>
                    <a href='/' className='hover:text-red-600'>News</a>
                </li>
                <li>
                    <a href='/' className='hover:text-red-600'>Worlds</a>
                </li>
                <li>
                    <a href='/' className='hover:text-red-600'>Games</a>
                </li>
                <li>
                    <a href='/' className='hover:text-red-600'>References</a>
                </li>
            </ul>
        </div>
{/* apple */}
        <div>
            <p className='text-white text-xl font-bold'>Apple</p>
            <ul className='mt-2 space-y-3'>
                <li>
                    <a href='/' className='hover:text-red-600'>Web</a>
                </li>
                <li>
                    <a href='/' className='hover:text-red-600'>eCommerce</a>
                </li>
                <li>
                    <a href='/' className='hover:text-red-600'>Business</a>
                </li>
                <li>
                    <a href='/' className='hover:text-red-600'>Entertainment</a>
                </li>
            </ul>
        </div>
{/* Cherry */}
        <div>
            <p className='text-white text-xl font-bold'>Cherry</p>
            <ul className='mt-2 space-y-3'>
                <li>
                    <a href='/' className='hover:text-red-600'>Media</a>
                </li>
                <li>
                    <a href='/' className='hover:text-red-600'>Broucher</a>
                </li>
                <li>
                    <a href='/' className='hover:text-red-600'>Nonprofit</a>
                </li>
                <li>
                    <a href='/' className='hover:text-red-600'>Education</a>
                </li>
            </ul>
        </div>
 
 {/* Business */}
        <div>
            <p className='text-white text-xl font-bold'>Business</p>
            <ul className='mt-2 space-y-3'>
                <li>
                    <a href='/' className='hover:text-red-600'>Infopreneur</a>
                </li>
                <li>
                    <a href='/' className='hover:text-red-600'>Personal</a>
                </li>
                <li>
                    <a href='/' className='hover:text-red-600'>Wiki</a>
                </li>
                <li>
                    <a href='/' className='hover:text-red-600'>Forum</a>
                </li>
            </ul>
        </div>

        {/* subscribe for updates */}
        <div>
        <form>
        <label >Subscribe:</label>
        <input type='email'name='email' id='email' required className='m-2 text-white px-1 py-1'/>
       <button className='flex justify-center mr-0 ml-20 mt-2 bg-blue-600 border-spacing-2 hover:bg-orange-600 p-1 shadow-md' type='submit'>subscribe</button>
        </form>
        <h3 className=' grip grip-cols-6 lg:space-x-3  m-1 p-2 text-3xl flex justify-start mt-4 mb-3'>
            <a href='#' className='text-red-600'><FaYoutube/></a>
            <a href='#' className='text-blue-600'><FaViber/></a>
            <a href='#' className='text-gray-600'><FaTiktok/></a>
            <a href='#' className='text-gray-600'><FaGithub/></a>
        </h3>
        </div>
        <p className='text-white hover:text-red-600 text-sm'>Copy Right 2024 | All Right Reserved</p>
    </div>
    
    
    </div>
  )
}

export default Footer