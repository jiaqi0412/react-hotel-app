import React from 'react';
import './App.css';
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import SingleRoom from "./pages/SingleRoom"
import Error from "./pages/Error"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Switch } from 'react-router-dom'

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cars" component={Rooms} />
        <Route exact path="/cars/:slug" component={SingleRoom} />
        <Route component={Error}></Route>
      </Switch>
      <Footer></Footer>

    </>
  );
}

export default App;
