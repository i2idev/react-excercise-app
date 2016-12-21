import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import AppConstants from '../constants/AppConstants.jsx';

var AppActions = {
	searchWorkout: function(workout) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SEARCH_WORKOUT,
			workout: workout
		});
	},
	receiveWorkouts: function(workouts){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECEIVE_WORKOUTS,
			workouts: workouts
		});
	},
	UserLogin: function(user) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.USER_LOGIN,
			user: user
		});
	},
	UserSignup: function(user) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.USER_SIGNUP,
			user: user
		});
	},
	successLogin: function(user) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SUCCESS_LOGIN,
			user: user
		});
	}
}

module.exports = AppActions;