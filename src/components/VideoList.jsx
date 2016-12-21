import React from 'react';
import AppActions from './actions/AppActions.jsx';
import AppStore from './stores/AppStore.jsx';
import Video from './Video.jsx';

var VideoList = React.createClass({
	
	render: function () {
		// Props coming from MainContent.jsx
		var workouts = this.props.workouts;
		return(
			<div className='row'>
				{
					workouts.map(function(workout, i) {
						return <Video workout={workout} key={i} />
					})
				}
			</div>
		)
	}
});

module.exports = VideoList;