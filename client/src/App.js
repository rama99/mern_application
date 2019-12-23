import React from 'react';
import {BrowserRouter , Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import LoginPage from './pages/login/login.component';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />

    </div>
    </BrowserRouter>
  );
}

export default App;
