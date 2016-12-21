import React from 'react';
import AppActions from './actions/AppActions.jsx';
import AppStore from './stores/AppStore.jsx';
import Header from './Header.jsx';
import { Router, Link, Navigation } from 'react-router';

var Login = React.createClass({
	componentDidMount: function(){
		AppStore.addChangeListener(this._onChange);
	},
	// componentWillUnmount: function(){
	// 	AppStore.RemoveChangeListener(this._onChange);
	// },
	handleSubmit: function(e) {
		e.preventDefault();
		var user = {
			email: this.refs.email.value.trim(),
			password: this.refs.password.value.trim()
		}
		AppActions.UserLogin(user);
		// Clear inputs after submission
 		this.refs.email.value = '';
 		this.refs.password.value = '';
	},
	render: function() {
		var loggedIn = AppStore.getLoginState();
		if (loggedIn == false) {
			return (
				<div>
					<div className='container'>
						<div className='row'>
							<div className='col-md-4 col-md-offset-4'>
								<form className='auth-form' onSubmit={this.handleSubmit}>
									<h1 className='auth-form-header'>Login</h1>
									<div className='form-group'>
										<label>Email</label>
										<input className="form-control" type='email' ref='email' placeholder='Email' autoComplete='on'/>
									</div>
									<div className='form-group'>
										<label>Password</label>
										<input className="form-control" type='password' ref='password' placeholder='Password'/>
									</div>
									<button type='submit' className='btn btn-default btn-block'>Login</button>						
									<p>Don't hanve an account? <Link to="/signup">Sign Up</Link></p>
								</form>
							</div>
						</div>
					</div>
			</div>
			)
		} 

		else {
			return(
			<div className='container'>
				<div className='row'>
					<div className='col-md-4 col-md-offset-4'>
						<div className='already_loggein'>
							<h4 className='text-center'>You're already logged In, <Link to='/'> Go back</Link></h4>
						</div>
					</div>
				</div>
			</div>
			)
		}
	}
});

module.exports = Login;