import { NavLink } from 'react-router-dom'
import SidebarLogo from '../assets/sidebar-logo.png'
import { Facebook, Instagram, Twitter, CloseRounded, Favorite } from '@mui/icons-material'
import { useState } from 'react'
import { Modal } from '@mui/material'
import FavoritesContainer from './FavoritesContainer'

const Sidebar = () => {
  return (
    <div className='sidebar__container'>
        <div className='sidebar__container__logo-container'>
            <img className='sidebar__container__logo-container__logo' src={SidebarLogo} alt='logo'/>
        </div>
        <div className='sidebar__container__menu'>
        <NavLink
    to='/'
    className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
  style={({ isActive, isPending, isTransitioning }) => {
    return {
      color: isActive ? '#52c6dc' : '#354b4e',
      borderBottom: isActive ? '2px solid #52c6dc' : '',
      textDecoration: 'none',
      fontFamily: "'Roboto', sans-serif",
      lineHeight: '23px',
      fontWeight: '600',
      fontSize: '15px',
    };
  }}
    >Home</NavLink>
             <NavLink
    to='/photography'
    className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
  style={({ isActive, isPending, isTransitioning }) => {
    return {
      color: isActive ? '#52c6dc' : '#354b4e',
      borderBottom: isActive ? '2px solid #52c6dc' : '',
      textDecoration: 'none',
      fontFamily: "'Roboto', sans-serif",
      lineHeight: '23px',
      fontWeight: '600',
      fontSize: '15px',
    };
  }}
    >Photography</NavLink>
             <NavLink
    to='/design'
    className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
  style={({ isActive, isPending, isTransitioning }) => {
    return {
      color: isActive ? '#52c6dc' : '#354b4e',
      borderBottom: isActive ? '2px solid #52c6dc' : '',
      textDecoration: 'none',
      fontFamily: "'Roboto', sans-serif",
      lineHeight: '23px',
      fontWeight: '600',
      fontSize: '15px',
    };
  }}
    >
     Design</NavLink>
     <NavLink
    to='/commercial'
    className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
  style={({ isActive, isPending, isTransitioning }) => {
    return {
      color: isActive ? '#52c6dc' : '#354b4e',
      borderBottom: isActive ? '2px solid #52c6dc' : '',
      textDecoration: 'none',
      fontFamily: "'Roboto', sans-serif",
      lineHeight: '23px',
      fontWeight: '600',
      fontSize: '15px',
    };
  }}
    >Commercial</NavLink>
            
            
        </div>
        <div className='sidebar__container__footer'>
            <a className='sidebar__container__footer__item' href='https://www.instagram.com/'>
            <Instagram className='sidebar__container__footer__item__icon'/>
            </a>
            <a className='sidebar__container__footer__item' href='https://www.facebook.com/'>
            <Facebook className='sidebar__container__footer__item__icon'/>
            </a>
            <a className='sidebar__container__footer__item' href='https://twitter.com/'>
            <Twitter className='sidebar__container__footer__item__icon'/>
            </a>
        </div>
    </div>
  )
}

export default Sidebar