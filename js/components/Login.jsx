import React from 'react';

let Login = React.createClass({

  render() {

    if (__DEV__) {
      console.warn('__DEV__');
    }

    if (__PRERELEASE__) {
      console.log('__PRERELEASE__');
    }

    return (<div>Welcome to login</div>);
  }
});

export default Login;
