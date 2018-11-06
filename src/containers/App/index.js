import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header } from '../Header';
import { Welcome } from '../Welcome';
import { CardContainer } from '../CardContainer';
import './App.css';

export const App = (props) => {
  const { isLoading } = props

  const noMatch = ({ location }) => (
    <div className='a-404'>
      <h2>404 - Your ship has gone off course.</h2>
      <p>No routes match {location.pathname}.</p>
      <p>Please click the orange buttons in this app to navigate to your desired destination.</p>
    </div>
  )

  return (
    <div className='App'>
      <Header />
      <Switch>
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
          component={noMatch}
        />
      </Switch>
      {/* <Route
        exact path='/search'
        render={() => CardContainer }
      /> */}
    </div>
  );
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
})

export default connect(mapStateToProps)(App);
