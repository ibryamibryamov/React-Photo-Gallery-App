import React, { useState, useEffect } from 'react'
import ImageCard from './ImageCard'
import data from '../data/data.json';
import { Badge, Modal } from '@mui/material';
import { CloseRounded, FavoriteRounded } from '@mui/icons-material';
import FavoritesContainer from './FavoritesContainer';



const PhotoGrid = (props) => {

const [filteredData, setFilteredData] = useState([]);
const [toggleFavoritesModal, setToggleFavoritesModal] = useState(false);
const [isModalDisabled, setIsModalDisabled] = useState(false);

function shuffleArray(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}


const handleFavoritesModal = () => {
  setToggleFavoritesModal(prevValue => !prevValue);
}


useEffect(()=>{
  if(props.filter==='All'){
    setFilteredData(shuffleArray(data.filter(item=>item.type===props.type)))
  } else {
    setFilteredData(data.filter(item=>item.type===props.type && item.category===props.filter));
  }
  },[props.filter, props.type])
  
 useEffect(()=>{
 if(props.favorites.length===0){
  setToggleFavoritesModal(false);
  setIsModalDisabled(true);
 } else {
  setIsModalDisabled(false);
 }

 },[props.favorites])

 
 
  


  return (
    <div className='photo-grid'>
      
      <button className='photo-grid__modal-btn' onClick={handleFavoritesModal} disabled={isModalDisabled}><Badge badgeContent={props.favorites.length}><FavoriteRounded className='photo-grid__modal-btn__icon'/></Badge></button>
        {
         filteredData.map((image, index)=>(
            <ImageCard
            key={index} 
            image={image.url}
            imageObject = {image}
            favorites = {props.favorites}
            handleFavorites = {props.handleFavorites}
            />
          ))
        }
        <Modal
        className='sidebar__container__favorites-modal'
        open={toggleFavoritesModal}
        onClose={handleFavoritesModal}
        >
        
        <div className='sidebar__container__favorites-modal__content'>
        <button className='sidebar__container__favorites-modal__content__close-btn' onClick={handleFavoritesModal}>
          <CloseRounded className='sidebar__container__favorites-modal__content__close-btn__icon'/>
        </button>
        <FavoritesContainer favorites={props.favorites} handleFavorites={props.handleFavorites}/>
        </div>
        </Modal>
    </div>
  )
}

export default PhotoGrid