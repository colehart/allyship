import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Loader } from '../../components/Loader';
import { fetchStories } from '../../thunks/fetchStories';
import apiKey from '../../apiKey';
import './Welcome.css';

export const Welcome = (props) => {
  const { isLoading, fetchStories } = props

  const handleClick = (query) => {
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
    fetchStories(url)
  }

  return (
    <main className='Welcome'>
      { isLoading ? <Loader /> : null }
      <section
        className={ isLoading ? 'hidden' : 'w-message'}
      >
        <h2>Welcome!</h2>
        <p>
          Allyship exists to help you find your way in the galaxy of knowledge and news any true ally must navigate.
        <br />
        <br />
          Research the latest news about a specific minority identity or issue.
        {/* , or choose your own query by entering a search keyword or phrase. */}
        </p>
      </section>
      <div
        className='w-category-group'
      >
        <Link
          to='/transgender'
          exact='true'
          className='btn'
          aria-label='Click here for the latest transgender news'
          onClick={() => handleClick('transgender')}
        >
          Transgender
        </Link>
        <Link
          to='/immigration'
          exact='true'
          className='btn'
          aria-label='Click here for the latest immigration news'
          onClick={() => handleClick('immigration')}
        >
          Immigration
        </Link>
        <Link
          to='/black-lives-matter'
          exact='true'
          className='btn'
          aria-label='Click here for the latest black lives matter news'
          onClick={() => handleClick('black%20lives%20matter')}
        >
          Black Lives Matter
        </Link>
      </div>
    </main>
  )
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading
})

export const mapDispatchToProps = (dispatch) => ({
  fetchStories: (url) => dispatch(fetchStories(url))
})

Welcome.propTypes = {
  isLoading: PropTypes.bool,
  fetchStories: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
