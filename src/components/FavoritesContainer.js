import { useState } from "react"
import FavoriteCard from "./FavoriteCard"


const FavoritesContainer = (props) => {

  return (
    <div className='favorites-container'>
    {
      props.favorites.map((favorite, index)=>(
      <FavoriteCard
       key={index}
       src={favorite.url}
       type={favorite.type}
       category={favorite.category}
       favoriteObject={favorite}
       addFavorite={props.addFavorite}
       handleFavorites={props.handleFavorites}
      />
      ))
      
    }
    </div>
  )
}

export default FavoritesContainer