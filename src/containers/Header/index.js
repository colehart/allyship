import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import shuttleIcon from '../../assets/images/space-shuttle.svg';
import './Header.css';

export const Header = () => {
  return (
    <div className='Header'>
      <Link
        to='/'
        className='h-logo-group'
      >
        <img
          className='h-logo'
          src={ shuttleIcon }
          alt='A space shuttle'
        />
        <h1>Allyship</h1>
      </Link>
      <nav className='h-nav-group'>
        <NavLink
          exact to='/'
          className="h-categories btn"
        >
          Categories
        </NavLink>
        <NavLink
          exact to='/saved'
          className="h-saved btn"
        >
          Saved
          <span className='h-badge'> 0</span>
        </NavLink>
      </nav>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  caughtError: state.caughtError,
  stories: state.stories
})

export default connect(mapStateToProps)(Header)