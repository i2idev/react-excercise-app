import React from 'react';
import AppActions from './actions/AppActions.jsx';
import AppStore from './stores/AppStore.jsx';

var Video = React.createClass({
	
	render: function () {
		// Props coming from VideoList.jsx
		var workout = this.props.workout;
		var link = "https://www.youtube.com/embed/"+ workout.video_link;
		return( 
			<div className='col-xs-12 col-sm-6 col-md-4 col-lg-6 videocontainer'>
				<div className='videodesc'>
					<iframe type="text/html" width="100%" height="200" src={link} frameBorder="0" allowFullScreen></iframe>
				</div>
			</div>
		)
	}
});

module.exports = Video;