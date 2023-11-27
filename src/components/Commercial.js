import React from 'react'
import TopBar from './TopBar'
import PhotoGrid from './PhotoGrid'
import { useState } from 'react'

const Commercial = (props) => {
  const [filter, setFilter] = useState('All');

  const updateFilter = (newFilter) => {
    setFilter(newFilter);
    }


  return (
    <div className='commercial'>
      <TopBar title='Commercial' updateFilter={updateFilter}/>
      <PhotoGrid
      type='Commercial'
      filter={filter}
      favorites={props.favorites}
      handleFavorites={props.handleFavorites}
      />
    </div>
  )
}

export default Commercial