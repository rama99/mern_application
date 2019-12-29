import React from 'react';
import {BrowserRouter , Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from './logo.svg';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import LoginPage from './pages/login/login.component';
import RegisterPage from './pages/register/register.component';
import BootcampsPage from './pages/bootcamps/bootcamps.component';
import BootcampDetailsPage from './pages/bootcamp-details/bootcamp-details.component';

import Header from './components/header/header.component';

import {Provider} from 'react-redux';
import { PersistGate} from 'redux-persist/integration/react';

import {store,persistor} from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <PersistGate persistor={persistor}>
            <Header/>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/bootcamps" component={BootcampsPage} /> 
            <Route exact path="/bootcampdetails/:id" component={BootcampDetailsPage} />        

          </PersistGate>
          <ToastContainer autoClose={2000} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
