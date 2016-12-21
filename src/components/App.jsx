import React from 'react';
import AppActions from './actions/AppActions.jsx';
import AppStore from './stores/AppStore.jsx';
import Header from './Header.jsx';
import MainContent from './MainContent.jsx';
import { Router, Route, hashHistory } from 'react-router';
import { Link } from 'react-router';

function getAppState() {
	return {
		loggedIn: AppStore.getLoginState(),
		workouts: AppStore.getWorkouts()
	}
}
var App = React.createClass({
	getInitialState: function() {
		return getAppState();
	},
	componentDidMount: function(){
		AppStore.addChangeListener(this._onChange);
	},
	// componentWillUnmount: function(){
	// 	AppStore.RemoveChangeListener(this._onChange);
	// },
	render: function () {
		if(this.state.loggedIn) {
			return (
				<div className='appContainer'>
					<Header />
					<div className='container'>
						<MainContent workouts={this.state.workouts}/>
					</div>
				</div>
			)
		} else {
			return (
				<div className='container'>
					<div className='row'>
						<div className='col-md-4 col-md-offset-4'>
							<h3>You must be logged in to access</h3>
							<p><Link to='/login'>Log In</Link></p>
							<p>Don't have and account? <Link to='/signup'>Sign Up</Link></p>
						</div>
					</div>
				</div>
			)
		}
	},

	_onChange: function () {
		this.setState(getAppState);
	}
});

module.exports = App;