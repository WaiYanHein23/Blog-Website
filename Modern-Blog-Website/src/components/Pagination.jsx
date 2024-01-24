import React from 'react'

const Pagination = ({onPageChange,blogs,currentPage,pageSize,selectCategory}) => {
    const totalPage=Math.ceil(blogs.length / pageSize);
   const renderPaginationLinks=()=>{
    return Array.from({length:totalPage},(_,i)=>i+1).map((pageNumber)=>(
        <li className={pageNumber===currentPage?"ActivePagination":""} key={pageNumber}> 
        <a href='#' onClick={()=>onPageChange(pageNumber)}>{pageNumber}</a>
        </li>
    ))
   }
  return (
    <div  className='ml-10'>
        <ul className='pagination flex-wrap gap-4'>
            <li className=' bg-gray-500 px-1 py-1 rounded-md hover:bg-red-600 shadow-lg'><button onClick={()=>onPageChange(currentPage -1)} disabled={currentPage===1}>Previous</button></li>
        
        <div className='flex m-3'>
            {renderPaginationLinks()}
        </div>
       <li className='bg-gray-500 px-3 py-1 rounded-md hover:bg-red-600 shadow-lg'> <button onClick={()=>onPageChange(currentPage +1)} disabled={currentPage===totalPage}>Next</button></li>
        </ul>
    </div>
  )
}

export default Pagination