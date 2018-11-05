import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

export const Welcome = () => {
  return (
    <main className="Welcome">
      <section className='w-message'>
        <h2>Welcome!</h2>
        <p>
          Allyship exists to help you find your way in the galaxy of knowledge and news any true ally must navigate.
        <br />
          Please choose from the following categories to research the latest news about a specific minority identity or choose your own by entering a specific search keyword or phrase.
        </p>
      </section>
      <Link to='/'>
      </Link>
    </main>
  )
}
