import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App.jsx';
import About from './components/About.jsx';
import Calender from './components/Calender.jsx';
import Extras from './components/Extras.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import AppAPI from './components/utils/AppAPI.js';

AppAPI.getWorkout();

var MyRoute = React.createClass({
	render: function() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={App} />
				<Route path='/dashboard' component={App} />
				<Route path='/about' component={About} />
				<Route path='/calender' component={Calender} />
				<Route path='/extras' component={Extras} />
				<Route path='/login' component={Login} />
				<Route path='/signup' component={Signup} />
			</Router>
		)
	}
});


ReactDOM.render(
	<MyRoute/>,
	document.getElementById('app')
);