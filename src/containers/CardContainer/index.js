import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Loader } from '../../components/Loader';
import Card from '../Card';
import './CardContainer.css';

export const CardContainer = (props) => {
  const { isLoading } = props
  const cards = []

  return (
    <main className='CardContainer'>
      { isLoading ? <Loader /> : null }
      { cards }
    </main>
  )
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading
})

CardContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(CardContainer)