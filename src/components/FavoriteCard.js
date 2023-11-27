import { Favorite, CloseRounded } from '@mui/icons-material';
import { useState } from 'react';



const FavoriteCard = (props) => {

const [favoriteBtnHover, setFavoriteBtnHover] = useState(false);

const handleFavoriteBtnMouseOver = () => {
  setFavoriteBtnHover(true)
}

const handleFavoriteBtnMouseLeave = () => {
setFavoriteBtnHover(false)
}

const handleFavorites = () => {
  props.handleFavorites(props.favoriteObject);
}



  return (
    <div className='favorite-card'>
      <img className='favorite-card__img' alt='favorite' src={props.src}/>
      <div className='favorite-card__info-container'>
        <h3 className='favorite-card__info-container__type'>{props.type}</h3>
        <h4 className='favorite-card__info-container__category'>{props.category}</h4>
      </div>
      <button className='favorite-card__favorite-btn'
      onMouseOver={handleFavoriteBtnMouseOver} 
      onMouseLeave={handleFavoriteBtnMouseLeave} 
      onClick={handleFavorites}
      >
        {
          favoriteBtnHover ? <CloseRounded className='favorite-card__favorite-btn__icon' /> : <Favorite className='favorite-card__favorite-btn__icon'/>
        }
      </button>
    </div>
  )
}

export default FavoriteCard