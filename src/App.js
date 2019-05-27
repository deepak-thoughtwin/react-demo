import React from 'react';

import { BrowserRouter, Route } from "react-router-dom";

import User from './components/User/';
import Header from './components/header/';
import SignIn from './components/signIn/';
import SignUp from './components/signUp/';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Route path="/" exact component={User} />
        <Route path="/sign_in/" component={SignIn} />
        <Route path="/sign_up/" component={SignUp} />
      </div>
    </BrowserRouter>
  );
}

export default App;
