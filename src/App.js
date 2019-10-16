import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from './components/Index/Index.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Profile from './components/Profile/Profile.jsx';
import Plans from './components/Plans/Plans.jsx';
import Country from './components/Country/Country';
import City from './components/City/City';
import Place from './components/Place/Place';
import Place2 from './components/Place/Place2';

const App = () => {

  const isMobile = window.innerWidth < 1000;

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ () => <Index isMobile={ isMobile } /> } />
        <Route path="/signin" component={ () => <Login isMobile={ isMobile } /> } />
        <Route path="/signup" component={ () => <Register isMobile={ isMobile } /> } />
        <Route path="/profile" component={ () => <Profile isMobile={ isMobile } /> } />
        <Route path="/plans" component={ () => <Plans isMobile={ isMobile } /> } />
        <Route path="/country" component={ () => <Country isMobile={ isMobile } /> } />
        <Route path="/city" component={ () => <City isMobile={ isMobile } /> } />
        <Route path="/place" component={ () => <Place isMobile={ isMobile } /> } />
        <Route path="/place2" component={ () => <Place2 isMobile={ isMobile } /> } />
      </Switch>
    </Router>
  );
};

export default App;
