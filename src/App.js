import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layouts/Navbar.js";
import Users from "./components/users/Users.js";
import User from "./components/users/User.js";
import Search from "./components/users/Search.js";
import Alert from "./components/layouts/Alert.js";
import About from "./components/pages/About.js";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = (props) => {

  return (
    <GithubState>
      <AlertState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert  />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
