import React from 'react'
import TopBar from './TopBar'
import PhotoGrid from './PhotoGrid'
import { useState } from 'react'

const Photography = (props) => {
  const [filter, setFilter] = useState('All');

  const updateFilter = (newFilter) => {
  setFilter(newFilter);
  }

 
  

  return (
    <div className='photography'>
      <TopBar title='Photography' updateFilter={updateFilter}/>
      <PhotoGrid 
      type='Photography'
      filter={filter}
      favorites={props.favorites}
      handleFavorites={props.handleFavorites}
      />
      </div>
  )
}

export default Photography