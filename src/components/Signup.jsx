import React from 'react';
import AppActions from './actions/AppActions.jsx';
import AppStore from './stores/AppStore.jsx';
import Header from './Header.jsx';
import { Router, Link, Navigation } from 'react-router';

var Signup = React.createClass({
	componentDidMount: function(){
		AppStore.addChangeListener(this._onChange);
	},
	// componentWillUnmount: function(){
	// 	AppStore.RemoveChangeListener(this._onChange);
	// },
	handleSubmit: function(e) {
		e.preventDefault();
		let password = this.refs.password.value.trim();
		let repeatedPassword = this.refs.repeatedPassword.value.trim();
		var user = {
			email: this.refs.email.value.trim(),
			password: this.refs.password.value.trim(),
			repeatedPassword: this.refs.repeatedPassword.value.trim()
		}

		if(password == repeatedPassword) {
			AppActions.UserSignup(user);
		} else {
			alert('Passwords don"t match');
		}

		// Clear inputs after submission
 		this.refs.email.value = '';
 		this.refs.password.value = '';
		this.refs.repeatedPassword.value = '';
	},

	render: function() {
		return (
			<div>
				<div className='container'>
					<div className='row'>
						<div className='col-md-4 col-md-offset-4'>
							<form className='auth-form' onSubmit={this.handleSubmit}>
								<h1 className='auth-form-header'>Sign Up</h1>
								<div className='form-group'>
									<label>Email</label>
									<input className="form-control" type='email' ref='email' placeholder='Email'/>
								</div>
								<div className='form-group'>
									<label>Password</label>
									<input className="form-control" type='password' ref='password' placeholder='Password'/>
								</div>
								<div className='form-group'>
									<label>Repeat password</label>
									<input className="form-control" type='password' ref='repeatedPassword' placeholder='Repeat password'/>
								</div>
								<button type='submit' className='btn btn-default btn-block'>Sign Up</button>						
								<p>Already hanve an account? <Link to="/login">Log In</Link></p>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Signup;