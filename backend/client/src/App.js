import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import LandingPage from './pages/LandingPage';
import Cities from './pages/Cities';
import Itineraries from './pages/Itineraries';
import Login from './pages/Login';
import Register from './pages/Register';
import { NotFound } from './pages/NotFound';
import Loader from './pages/Loader';

const App = props => {
  const isLogged = props.user.isAuthenticated;

  return (
    <BrowserRouter>
      <section className='App'>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/token/:token' component={LandingPage} />
          <Route exact path='/cities' component={Cities} />
          <Route exact path='/cities/:city_name/:_id' component={Itineraries} />
          <Route
            exact
            path='/login'
            component={isLogged ? LandingPage : Login}
          />
          <Route
            exact
            path='/register'
            component={isLogged ? LandingPage : Register}
          />
          <Route exact path='/loaduser/:token' component={Loader} />
          <Route component={NotFound} />
        </Switch>
      </section>
    </BrowserRouter>
  );
};

const mapDispatchToProps = reducer => {
  return { user: reducer.user };
};

export default connect(mapDispatchToProps, null)(App);
