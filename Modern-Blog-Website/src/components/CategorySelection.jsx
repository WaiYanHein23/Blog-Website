import React from 'react'

const CategorySelection = ({onSelectCategory,selectCategory,activeCategory}) => {
    const categories=["Startups","Security","Growth","Tech"];
  return (
    <div className='mx-12 my-4 flex flex-wrap items-center border-b-2 px-3 py-3'>
    <button onClick={()=>onSelectCategory(null)} className={`lg:ml-12 mr-4 ${activeCategory ?"":"active-button"}`}>All</button>
    {categories.map((category)=>(
        <button onClick={()=>onSelectCategory(category)} className={`mr-3 space-x-20 ${activeCategory===category?"active-button":""}`} key={category}>{category}</button>
    ))}
    </div>
  )
}

export default CategorySelection