import React from 'react';
import AppActions from './actions/AppActions.jsx';
import AppStore from './stores/AppStore.jsx';
import Header from './Header.jsx';

var Calender = React.createClass({
	componentDidMount: function(){
		AppStore.addChangeListener(this._onChange);
	},
	// componentWillUnmount: function(){
	// 	AppStore.RemoveChangeListener(this._onChange);
	// },
	render: function() {
		return (
			<div>
				<Header />
				<div className='container'>
					<div className='row'>
						<h1>Calender</h1>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Calender;