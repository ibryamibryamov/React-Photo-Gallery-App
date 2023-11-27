import AddToFavoritesIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { OpenInFull } from '@mui/icons-material';
import { useState } from 'react';
import { useEffect } from 'react';

const ImageCard = (props) => {
const [favoriteBtnVisibility, setFavoriteBtnVisibility] = useState('image-card__btn-container-favorite-btn--hidden');
const [downloadBtnVisibility, setDownloadBtnVisibility] = useState('image-card__btn-container-download-btn--hidden');
const [isFavorite, setIsFavorite] = useState(false);


const handleMouseOver = () => {
setFavoriteBtnVisibility('image-card__btn-container-download-btn');
setDownloadBtnVisibility('image-card__btn-container-download-btn');
}

const handleMouseLeave = () => {
  setFavoriteBtnVisibility('image-card__btn-container-download-btn--hidden');
  setDownloadBtnVisibility('image-card__btn-container-download-btn--hidden');
  }


const handleFullsize = () => {
  const link = document.createElement('a');
  link.href = props.image;
  link.click();
}

const handleFavorite = () => {
props.handleFavorites(props.imageObject);
}

useEffect(()=>{
if(props.favorites.includes(props.imageObject)){
  setIsFavorite(true);
} else {
  setIsFavorite(false);
}
},[props.favorites])


  return (
    <div className='image-card' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <img className='image-card__img' src={props.image}/>
        <div className='image-card__btn-container'>
            <button className={favoriteBtnVisibility} onClick={handleFavorite}>{isFavorite ? <FavoriteIcon/> : <AddToFavoritesIcon/>}</button>
            <button className={downloadBtnVisibility} onClick={handleFullsize}><OpenInFull/></button>
        </div>
    </div>
  )
}

export default ImageCard