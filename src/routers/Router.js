import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import CreateMember from '../components/CreateMember';
import Navigation from '../components/Navigation';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <header>
        <div className="container">
          <h1>BASHR Management System</h1>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <Navigation />
          </div>
          <div className="col-sm-9">
            <main>
              <Switch>
                <Route path="/" component={CreateMember} exact={true} />
                <Route component={CreateMember} />
              </Switch>
            </main>
          </div>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
