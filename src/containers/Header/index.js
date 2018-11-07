import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import shuttleIcon from '../../assets/images/space-shuttle.svg';
import './Header.css';

export const Header = ({ stories, caughtError }) => {
  const checkSaved = () => {
    if (stories !== undefined) {
      return stories.reduce((numSaved, story) => {
        if (story.isSaved) numSaved++
        return numSaved
      }, 0)
    }
  }

  return (
    <div className='Header'>
      <div
        className={ caughtError ? 'h-error' : 'hidden'}
      >
        { caughtError }
      </div>
      <Link
        to='/'
        className='h-logo-group'
        aria-label='The Allyship logo, a link to return to the homepage'
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
          aria-label='Click to return to the homepage'
        >
          Categories
        </NavLink>
        <NavLink
          exact to='/saved'
          className="h-saved btn"
          aria-label='Click to view saved news articles'
        >
          Saved
          <span className='h-badge'>{checkSaved() || 0}</span>
        </NavLink>
      </nav>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  caughtError: state.caughtError,
  stories: state.stories,
})

Header.propTypes = {
  caughtError: PropTypes.string,
  stories: PropTypes.array,
}

export default connect(mapStateToProps)(Header)