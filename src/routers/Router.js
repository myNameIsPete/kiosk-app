import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import CreateMemberPage from '../components/CreateMemberPage';
import Navigation from '../components/Navigation';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <header>
        <div className="container">
          <h1>Kiosk App Data Management System</h1>
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
                <Route path="/" component={CreateMemberPage} exact={true} />
                <Route component={CreateMemberPage} />
              </Switch>
            </main>
          </div>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
