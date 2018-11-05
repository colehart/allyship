import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../Header'
import { CardContainer } from '../CardContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route
          exact path='/'
          component={ CardContainer }
        />
        <Route
          exact path='/saved'
          render={() => CardContainer }
        />
      </div>
    );
  }
}

export default App;
