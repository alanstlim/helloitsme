import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { AboutMe } from './pages/AboutMe';
import { Portfolio } from './pages/Portfolio';
import { WorkdExperience } from './pages/WorkExperience';
import { Dashboard } from './pages/Dashboard';

export const Routes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={AboutMe} />
        <Route path="/WorkExperience" component={WorkdExperience} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};
