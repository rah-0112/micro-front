import Header from "./components/Header";
import Intro from "./components/Intro";
import Auth from './components/Auth/Auth';

import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Details from "./components/Details";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <>
      <BrowserRouter>
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Switch >
            <Route exact path='/' component={Intro} />
            <Route exact path='/details' component={Details} />
            <Route path='/auth' exact component={() => (!user ? <Auth /> : <Redirect to='/' />)} />
            <Route path='/auth' exact component={<></>} />
          </Switch>
        </AnimatePresence>
      </BrowserRouter>
    </>
  )
}

export default App;