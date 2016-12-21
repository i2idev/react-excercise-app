import React from 'react';
import AppActions from './actions/AppActions.jsx';
import AppStore from './stores/AppStore.jsx';
import VideoList from './VideoList.jsx';
import ContentFilter from './ContentFilter.jsx';

var MainContent = React.createClass({
	
	render: function () {
		return(
			<div className='row' id="content-wrapper">
				<h1 className='col-md-12'>Full-Length Workout Videos</h1>
				<div className='col-md-4'>
					<ContentFilter />
				</div>
				<div className='col-md-8'>
					<VideoList workouts={this.props.workouts} />
				</div>
			</div>
		)
	}
});

module.exports = MainContent;