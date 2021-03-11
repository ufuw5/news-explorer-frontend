import React from 'react';
import {
  Route,
  withRouter,
} from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" exact render={() => <Main />} />
      <Route path="/saved-news" render={() => <SavedNews />} />
    </div>
  );
}

export default withRouter(App);
