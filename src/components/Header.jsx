import React from 'react';
import AppActions from './actions/AppActions.jsx';
import AppStore from './stores/AppStore.jsx';
import { Router, Route, hashHistory, Link } from 'react-router';

var Header = React.createClass({
	
	render: function () {
		return(
			<header>
				<nav className="navbar navbar-default">
					<div className="container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
						<Link className="navbar-brand text-bold text-uppercase" to="/">Wellbeing</Link>
						</div>
						<div id="navbar" className="navbar-collapse collapse">
							<ul className="nav navbar-nav">
								<li><Link to="/" activeClassName='active'>Workouts</Link></li>
								<li><Link to="/about" activeClassName='active'>About</Link></li>
								<li><Link to="/login" activeClassName='active'>Login</Link></li>
							</ul>
							<ul className="nav navbar-nav navbar-right navicon">
								<li><a href="#"><i className='fa fa-facebook'></i></a></li>
								<li><a href="#"><i className='fa fa-instagram'></i></a></li>
								<li><a href="#"><i className='fa fa-youtube'></i></a></li>
							</ul>
						</div>
					</div>
				</nav>
				<h1 className='text-center'>Wellbeing</h1>
			</header>
		)
	}
});

module.exports = Header;