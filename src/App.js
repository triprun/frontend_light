import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Index from './components/Index/Index.jsx';
import Detailed from './components/Detailed/Detailed.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Profile from './components/Profile/Profile.jsx';
import PlanList from './components/PlanList/PlanList.jsx';
import Plans from './components/Plans/Plans3.jsx';
import Place from './components/Info/Place.jsx';
import City from './components/Info/City.jsx';
import Country from './components/Info/Country.jsx';

const App = () => {

  const isMobile = window.innerWidth < 1000;

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ () => <Index isMobile={ isMobile } /> } />
        <Route exact path="/detailed" component={ () => <Detailed isMobile={ isMobile } /> } />
        <Route path="/signin" component={ () => <Login isMobile={ isMobile } /> } />
        <Route path="/signup" component={ () => <Register isMobile={ isMobile } /> } />
        <Route path="/profile" component={ () => <Profile isMobile={ isMobile } /> } />
        <Route path="/plans/detailed" component={ (props) => props.location.planid ? <Plans isMobile={ isMobile } planid={ props.location.planid } /> :  <Redirect to="/plans" /> } />
        <Route path="/plans" component={ () => <PlanList isMobile={ isMobile } /> } />
        <Route path="/place" component={ () => <Place isMobile={ isMobile } /> } />
        <Route path="/city" component={ () => <City isMobile={ isMobile } /> } />
        <Route path="/country" component={ () => <Country isMobile={ isMobile } /> } />
      </Switch>
    </Router>
  );
};

export default App;
