import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

/* Views */
import Home from './views/Home';
import Oportunity from './views/Oportunity';
import Bussiness from './views/Bussiness';
import Help from './views/Help';
import Payment from './views/Payment';
import Login from './views/Login'


import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      {/* <Route exact path="/signup" component={SignUp} /> */}
      <PrivateRoute exact path="/"              component={Home} />
      <PrivateRoute exact path="/oportunidades" component={Oportunity} />
      <PrivateRoute exact path="/negocios"      component={Bussiness} />
      <PrivateRoute exact path="/posso-ajudar"  component={Help} />
      {/* <PrivateRoute exact path="/configuracoes" component={} /> */}
      <PrivateRoute exact path="/pagamentos"    component={Payment} />


      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;