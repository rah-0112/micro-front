import Header from "./components/Header";
import Intro from "./components/Intro";
import Auth from './components/Auth/Auth';
import StudentView from "./components/StudentView"

import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Details from "./components/Details";

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={() => (!user?.user ? <Intro /> : <Redirect to='/loggedin' />)} />
          <Route exact path='/details' component={Details} />
          <Route exact path='/auth' component={() => (!user?.user ? <Auth /> : <Redirect to='/loggedin' />)} />
          <Route exact path='/loggedin' component={StudentView} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;