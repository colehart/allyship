import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

export const Welcome = () => {
  return (
    <main className='Welcome'>
      <section className='w-message'>
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
        >
          Transgender
        </Link>
        <Link
          to='/immigration'
          exact='true'
          className='btn'
          aria-label='Click here for the latest immigration news'
        >
          Immigration
        </Link>
        <Link
          to='/black-lives-matter'
          exact='true'
          aria-label='Click here for the latest black lives matter news'
          className='btn'
        >
          Black Lives Matter
        </Link>
      </div>
    </main>
  )
}
