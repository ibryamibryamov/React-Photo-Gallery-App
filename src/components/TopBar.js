import { useState } from "react";


const TopBar = (props) => {
  const filterCategories = [
  'All',
  'Animals',
  'Technology',
  'Nature',
  'Travel',
  'Food',
  'Sports',
  'Art',
  'People',
  ];

  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    props.updateFilter(filter);
  }

  return (
    <div className='top-bar'>
    <h1 className='top-bar__title'>{props.title}</h1>
    <div className='top-bar__filters'>
    {
      filterCategories.map((filter)=>(
        <button
        key={filter}
        className={activeFilter === filter ? 'top-bar__filters__filter--active' : 'top-bar__filters__filter'}
        onClick={()=>handleFilterClick(filter)}
        >
          {filter}
        </button>
      ))
    }
    </div>
    </div>
  )
}

export default TopBar