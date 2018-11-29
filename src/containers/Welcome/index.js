import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Loader } from '../../components/Loader';
import { fetchStories } from '../../thunks/fetchStories';
import './Welcome.css';

export const Welcome = (props) => {
  const { isLoading, fetchStories } = props

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
        <div
          className='w-category-group'
        >
          <Link
            to='/transgender'
            exact='true'
            className='w-transgender btn'
            aria-label='Click here for the latest transgender news'
            onClick={() => fetchStories('transgender')}
          >
            Transgender
          </Link>
          <Link
            to='/immigration'
            exact='true'
            className='w-immigration btn'
            aria-label='Click here for the latest immigration news'
            onClick={() => fetchStories('immigration')}
          >
            Immigration
          </Link>
          <Link
            to='/black-lives-matter'
            exact='true'
            className='w-black-lives-matter btn'
            aria-label='Click here for the latest black lives matter news'
            onClick={() => fetchStories('black%20lives%20matter')}
          >
            Black Lives Matter
          </Link>
        </div>
      </section>
    </main>
  )
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading
})

export const mapDispatchToProps = (dispatch) => ({
  fetchStories: (query) => dispatch(fetchStories(query))
})

Welcome.propTypes = {
  isLoading: PropTypes.bool,
  fetchStories: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
