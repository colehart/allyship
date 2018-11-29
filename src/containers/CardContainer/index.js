import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { PropTypes } from 'prop-types';
import { Loader } from '../../components/Loader';
import { checkSaved, cleanName } from '../../utils'
import Card from '../Card';
import './CardContainer.css';

export const CardContainer = (props) => {
  const { isLoading, location, history, stories } = props
  const savedStories = checkSaved(location, stories)
  const cards = makeCards(savedStories, stories)

  const backButton = (
    <button
      className='cc-back-btn'
      onClick={() => history.goBack()}>
      &#8592; Back
    </button>
  )

  const noSavedStories = (
    <div className='cc-no-saved'>
      <h3>
        You have no saved stories.
      </h3>
      <p>
        Click the sun icon in the upper right corner of any article to save a story.
      </p>
    </div>
  )

  return (
    <main>
      <div className='cc-title-group'>
        { savedStories ? backButton : '' }
        <h2 className='cc-title'>
          { savedStories ? 'Saved Stories' : `Latest ${cleanName(location.pathname)} News` }
        </h2>
        { savedStories ? <div className='cc-placeholder'></div> : '' }
      </div>
      <div className='CardContainer'>
        { savedStories && !savedStories.length ? noSavedStories : '' }
        { isLoading ? <Loader /> : cards }
      </div>
    </main>
  )
}

const makeCards = (savedStories, stories) => {
  return (savedStories || stories).map(story => {
    return <Card {...story} key={story.url} />
  })
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