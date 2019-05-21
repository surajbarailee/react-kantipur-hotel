import React from 'react';
import Footer from "./components/Footer"
import './App.css';

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Contact from './pages/Contact'
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms/' component={Rooms} />
        <Route exact path='/rooms/:slug' component={SingleRoom} />
        <Route exact path='/contact/' component={Contact} />
        <Route component={Error} />
      </Switch>
      <Footer />



    </>
  );
}

export default App;
