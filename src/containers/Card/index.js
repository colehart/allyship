import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { toggleSaved } from '../../actions';
import './Card.css';

export const Card = (props) => {
  const {
    source,
    author,
    title,
    description,
    url,
    urlToImage,
    published,
    isSaved,
    toggleSaved
  } = props

  return (
    <article className='Card'>
      <div className='c-title-group'>
        <h3 className='c-title'>{title}</h3>
        <div
          className={`c-save ${ isSaved ? 'is-saved' : '' }`}
          onClick={() => toggleSaved(title)}
        >
        </div>
      </div>
      <p className='c-byline'>{published} | {source} {`${author ? `| ${author}` : ''}`}</p>
      <img className='c-image' src={urlToImage} alt='provided illustration'/>
      <p className='c-description'>{description}</p>
      <a
        className='c-link'
        href={url}
        target='_blank'
        rel='noopener noreferrer'
      >
        Read article from source
      </a>
    </article>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  toggleSaved: (headline) => dispatch(toggleSaved(headline))
})

Card.propTypes = {
  toggleSaved: PropTypes.func
}

export default connect(null, mapDispatchToProps)(Card)