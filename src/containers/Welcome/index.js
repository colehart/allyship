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
          exact to='/transgender'
          className='btn'
        >
          Transgender
        </Link>
        <Link
          exact to='/immigration'
          className='btn'
        >
          Immigration
        </Link>
        <Link
          exact to='/black-lives-matter'
          className='btn'
        >
          Black Lives Matter
        </Link>
      </div>
    </main>
  )
}
