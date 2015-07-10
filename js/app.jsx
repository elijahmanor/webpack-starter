import React from 'react';
import Router from 'react-router';
import { Link, Route, RouteHandler } from 'react-router';
import '../scss/sydney';

import LoginHandler from './components/Login.jsx';

let App = React.createClass({
  render() {
    return (
      <div className="nav">
        <Link to="app">Home</Link>
        <Link to="login">Login</Link>

        {/* this is the importTant part */}
        <RouteHandler/>
      </div>
    );
  }
});

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={LoginHandler}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
