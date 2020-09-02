import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jobs from "./Components/Jobs"
import App from './Components/App';


ReactDOM.render(
  <React.StrictMode>
  <Router>
  <Switch>
    <Route path="/jobs" component={Jobs} />
    <Route path="/" component={App} />
  </Switch>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

