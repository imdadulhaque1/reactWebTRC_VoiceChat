import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./Components/Home/Home";
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
