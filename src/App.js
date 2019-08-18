import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from './components/Index/Index.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Profile from './components/Profile/Profile.jsx';

const App = () => {

  const isMobile = window.innerWidth < 1000;

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ () => <Index isMobile={ isMobile } /> } />
        <Route path="/signin" component={ () => <Login isMobile={ isMobile } /> } />
        <Route path="/signup" component={ () => <Register isMobile={ isMobile } /> } />
        <Route path="/profile" component={ () => <Profile isMobile={ isMobile } /> } />
      </Switch>
    </Router>
  );
};

export default App;
