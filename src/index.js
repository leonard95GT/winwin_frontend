import React from 'react';
import ReactDOM from 'react-dom';

/* Views */
import Home from './views/Home';
import Oportunity from './views/Oportunity';
import Bussiness from './views/Bussiness';
import Help from './views/Help';
import Payment from './views/Payment';
import Login from './views/Login'

import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/oportunidades">
            <Oportunity />
          </Route>
          <Route path="/negocios">
            <Bussiness />
          </Route>
          <Route path="/posso-ajudar">
            <Help />
          </Route>
          <Route path="/pagamentos">
            <Payment />
          </Route>
          <Route path="/login">
            <Login />
          </Route>


        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
