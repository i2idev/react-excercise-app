import React from 'react';
import AppActions from './actions/AppActions.jsx';
import AppStore from './stores/AppStore.jsx';

var ContentFilter = React.createClass({
	onSubmit: function(e) {
		e.preventDefault();
		var workout = {
			search: this.refs.search.value.trim(),
		}

		var checkboxes = document.getElementsByClassName('form-check-input');
		for(var i=0; i<checkboxes.length; i++) {
			if(checkboxes[i].checked) {
				workout[checkboxes[i].getAttribute('name')] = true;
			}
		}

		AppActions.searchWorkout(workout);
		// if(workout.search !== '') {
		// }
	},
	
	render: function () {
		return(
			<form className='well' onSubmit={this.onSubmit}>
				<h3>Search workouts</h3><hr/>
				<div className='form-group'>
					<label>Keyword(s)</label>
					<input className='form-control' type='text' ref='search' placeholder='search'/>
				</div>
				<div className='form-group'>
					<label>Body Focus</label>
			      	<div>
			      		<input type="checkbox" className="form-check-input" name='total'/> Total Body 
			      	</div> 
			      	<div>
				      	<input type="checkbox" className="form-check-input" name='upper'/> Upper Body 
			      	</div>
			      	<div>
				      	<input type="checkbox" className="form-check-input" name='lower'/> Lower Body 
			      	</div>
			    </div>
			    <div className='form-group'>
					<label>Difficulty</label>
			      	<div>
			      		<input type="checkbox" className="form-check-input" name='difficulty_one'/> 1 
			      	</div> 
			      	<div>
				      	<input type="checkbox" className="form-check-input" name='difficulty_two'/> 2
			      	</div>
			      	<div>
				      	<input type="checkbox" className="form-check-input" name='difficulty_three'/> 3 
			      	</div>
			      	<div>
				      	<input type="checkbox" className="form-check-input" name='difficulty_four'/> 4 
			      	</div>
			      	<div>
				      	<input type="checkbox" className="form-check-input" name='difficulty_five'/> 5 
			      	</div>
			    </div>
				<input type='submit' className='btn btn-block btn-primary' value='Find Workouts'/>
			</form>
		)
	}
});

module.exports = ContentFilter;