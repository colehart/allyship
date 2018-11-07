import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Loader } from '../../components/Loader';
import { Card } from '../Card';
import './CardContainer.css';

export const CardContainer = (props) => {
  const { isLoading } = props
  const cards = props.stories.map(story => {
    return <Card {...story} key={story.url} />
  })

  return (
    <main>
      <h2 className='cc-title'>Latest News</h2>
      <div className='CardContainer'>
        { isLoading ? <Loader /> : cards }
      </div>
    </main>
  )
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  stories: state.stories,
})

CardContainer.propTypes = {
  isLoading: PropTypes.bool,
  stories: PropTypes.array,
}

export default connect(mapStateToProps)(CardContainer)