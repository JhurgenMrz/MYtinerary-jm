import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { LandingPage } from './pages/LandingPage';
import Cities from './pages/Cities';
import Itineraries from './pages/Itineraries';
import { Login } from './pages/Login';
import Register from './pages/Register';
import { NotFound } from './pages/NotFound';

export const App = () => {
	return (
		<BrowserRouter>
			<section className='App'>
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route exact path='/cities' component={Cities} />
					<Route exact path='/cities/:city_name/:_id' component={Itineraries} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />
					<Route component={NotFound} />
				</Switch>
			</section>
		</BrowserRouter>
	);
};
