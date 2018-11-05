import React from 'react';
import { NavLink } from 'react-router-dom'
import shuttleIcon from '../../assets/images/space-shuttle.svg'
import './Header.css';

export const Header = () => {
  return (
    <div className='Header'>
      <NavLink
        to='/'
        className='h-logo-group'
      >
        <img
          className='h-logo'
          src={ shuttleIcon }
          alt='A space shuttle'
        />
        <h1>allyShip</h1>
      </NavLink>
      <nav className='h-nav-group'>
        <NavLink
          to='/'
          className="h-categories btn"
        >
          Categories
        </NavLink>
        <NavLink
          to='/saved'
          className="h-saved btn"
        >
          Saved
          <span className='h-badge'> 0</span>
        </NavLink>
      </nav>
    </div>
  )
}