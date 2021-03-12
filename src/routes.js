import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Transactions from "./pages/Transactions";
import LoginRegister from "./pages/LoginRegister";

import { isAuthenticated } from "./services/auth";

const Routes = () => (
  <Switch>
    <PrivateRoute path="/transactions" exact component={Transactions} />
    <UnreachAfterLoginRoute path="/login" exact component={LoginRegister} />
  </Switch>
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const UnreachAfterLoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/transactions", state: { from: props.location } }} />
      )
    }
  />
);

export default Routes;
