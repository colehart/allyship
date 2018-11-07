import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { PropTypes } from 'prop-types';
import { Loader } from '../../components/Loader';
import Card from '../Card';
import './CardContainer.css';

export const CardContainer = (props) => {
  const { isLoading, location, history, stories } = props
  const savedStories = checkSaved(location, stories)
  const cards = makeCards(savedStories, stories)

  const backButton = (
    <a
      className='cc-back-btn'
      onClick={() => history.goBack()}>
      &#8592; Back
    </a>
  )

  return (
    <main>
      <div className='cc-title-group'>
        {savedStories ? backButton : ''}
        <h2 className='cc-title'>
          {savedStories ? 'Saved Stories' : `Latest ${cleanName(location.pathname)} News`}
        </h2>
        {savedStories ? <div className='cc-placeholder'></div> : ''}
      </div>
      <div className='CardContainer'>
        { isLoading ? <Loader /> : cards }
      </div>
    </main>
  )
}

const checkSaved = (location, stories) => {
  if(location.pathname === '/saved') {
    return stories.filter(story => story.isSaved)
  }
}

const makeCards = (savedStories, stories) => {
  return (savedStories || stories).map(story => {
    return <Card {...story} key={story.url} />
  })
}

const cleanName = (pathname) => {
  return pathname.charAt(1).toUpperCase() + pathname.slice(2);
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  stories: state.stories,
})

CardContainer.propTypes = {
  isLoading: PropTypes.bool,
  stories: PropTypes.array,
}

export default withRouter(connect(mapStateToProps)(CardContainer))