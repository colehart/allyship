import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../../containers/Header';
import { Welcome } from '../../containers/Welcome';
import { CardContainer } from '../../containers/CardContainer';
import './App.css';

export const App = () => {
  const noMatch = ({ location }) => (
    <div className='a-404'>
      <h2>404 - Your ship has gone off course.</h2>
      <p>No routes match {location.pathname}.</p>
      <p>Please click the orange buttons in this app to navigate to your desired destination.</p>
    </div>
  )

  return (
    <div className='App'>
      <Header stories={[]}/>
      <Switch>
        <Route
          exact path='/'
          component={ Welcome }
        />
        <Route
          exact path='/saved'
          render={ () => <CardContainer /> }
        />
        <Route
          exact path='/transgender'
          render={ () => <CardContainer /> }
        />
        <Route
          exact path='/immigration'
          render={ () => <CardContainer /> }
        />
        <Route
          exact path='/black-lives-matter'
          render={ () => <CardContainer /> }
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