import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import AppConstants from '../constants/AppConstants.jsx';
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
import AppAPI from '../utils/AppAPI.js';
import { Router, Route, hashHistory } from 'react-router';

var CHANGE_EVENT = 'change';

var _workouts = [];
var loggedIn = false;

var AppStore = assign({}, EventEmitter.prototype, {
	receiveWorkouts: function(workouts) {
		_workouts = workouts;
	},
	getWorkouts: function() {
		return _workouts;
	},
	successLogin: function() {
		loggedIn = true;
		console.log('connected');
		hashHistory.push('/')
	},
	getLoginState: function() {
		return loggedIn;
	},
	emitChange: function() {
		this.emit(CHANGE_EVENTS)
	},
	addChangeListener: function(callback) {
		this.on('change', callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener('change', callback);	
	}
});

AppDispatcher.register(function (payload) {
	var action = payload.action;
	switch (action.actionType) {
		case AppConstants.SEARCH_WORKOUT:
			AppAPI.searchWorkout(action.workout);
			AppStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.RECEIVE_WORKOUTS:
			AppStore.receiveWorkouts(action.workouts);
			AppStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.USER_LOGIN:
			AppAPI.UserLogin(action.user);
			AppStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.USER_SIGNUP:
			AppAPI.UserSignup(action.user);
			AppStore.successLogin(action.user);
			AppStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.SUCCESS_LOGIN:
			AppStore.successLogin(action.user);
			AppStore.emit(CHANGE_EVENT);
			break;
	}
	return true;
});

module.exports = AppStore;