import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../Header'
import { Welcome } from '../Welcome'
import { CardContainer } from '../CardContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Route
          exact path='/'
          component={ Welcome }
        />
        <Route
          exact path='/saved'
          render={() => CardContainer }
        />
        <Route
          exact path='/transgender'
          render={() => CardContainer }
        />
        <Route
          exact path='/immigration'
          render={() => CardContainer }
        />
        <Route
          exact path='/black-lives-matter'
          render={() => CardContainer }
        />
        <Route
          exact path='/search'
          render={() => CardContainer }
        />
      </div>
    );
  }
}

export default App;
