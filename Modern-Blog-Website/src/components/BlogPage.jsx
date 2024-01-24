import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize=12;
  const [selectCategory, setSelectCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  useEffect(()=>{
// axios.get("http://localhost:3030/blogs").then((res)=>setBlogs(res.data))
async function fetchBlogs(){

  let url=`http://localhost:3030/blogs`;

  //fiilter by category
  if(selectCategory){
    url +=`&category=${selectCategory}`;
  }

let response=await fetch(url);
let data=await response.json();
setBlogs(data);
}
fetchBlogs();
  },[currentPage,pageSize,selectCategory]);
  
  //page changing btn
  const handleChagePage=(page)=>{
    setCurrentPage(page);
  }

  //cagegory changing btn
  const handleChangeCategory=(category)=>{
    setSelectCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  }
  return (
    <div className='mx-auto mr-0 ml-2'>

    {/* CategorySelection */}
<div><CategorySelection onSelectCategory={handleChangeCategory} selectCategory={selectCategory} activeCategory={activeCategory} /></div>
<div className='flex flex-col lg:flex-row gap-14 '>
{/* Blogs Card Section */}
<BlogCard blogs={blogs} currentPage={currentPage} pageSize={pageSize} selectCategory={selectCategory} />

<div>
{/* Side Bar blogs */}
<SideBar/>

</div>
</div>

<div><Pagination onPageChange={handleChagePage} blogs={blogs} currentPage={currentPage} pageSize={pageSize} selectCategory={selectCategory}/></div>

    </div>
  )
}

export default BlogPage