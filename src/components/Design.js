import React from 'react'
import TopBar from './TopBar'
import PhotoGrid from './PhotoGrid'
import { useState } from 'react'

const Design = (props) => {
  const [filter, setFilter] = useState('All');

  const updateFilter = (newFilter) => {
    setFilter(newFilter);
    }

  return (
    <div>
      <TopBar title='Design' updateFilter={updateFilter}/>
      <PhotoGrid
       type='Design'
       filter={filter}
       favorites={props.favorites}
       handleFavorites={props.handleFavorites}
      />
    </div>
  )
}

export default Design