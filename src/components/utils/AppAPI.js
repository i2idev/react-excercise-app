import AppActions from '../actions/AppActions.jsx';

var firebase = require('firebase');
var firebaseui = require('firebaseui');
var config = {
    apiKey: "AIzaSyCIwpj-Qm_uijBwGISe4fDnNz3HUA3LFjE",
    authDomain: "excercise-app.firebaseapp.com",
    databaseURL: "https://excercise-app.firebaseio.com",
    storageBucket: "excercise-app.appspot.com",
    messagingSenderId: "1090302451677",
    callbacks: {
		signInSuccess: function(currentUser, credential, redirectUrl) {
			return true;
		}
	}
  };
firebase.initializeApp(config);
// var rootRef = new Firebase("https://excercise-app.firebaseio.com/");


module.exports = {
	getWorkout: function(workout) {
		$.ajax({
			url: "../src/components/utils/data.json",
			dataType: "json",
			cache: false,
			success: function(data) {
				AppActions.receiveWorkouts(data);
			}.bind(this),
			error: function(xhr, status, err){
				alert(err);
			}.bind(this)
		});
	},


	searchWorkout: function(workout) {
		var searchkey = workout.search.toLowerCase();
		$.ajax({
			url: "../src/components/utils/data.json",
			dataType: "json",
			cache: false,
			success: function(data) {
				var a = data;
				var index = 0;
				var found=[];
				var entry;
				for (index = 0; index < a.length; ++index) {
				    entry = a[index];
					if( searchkey !== '' && entry.title.toLowerCase().indexOf(searchkey) !== -1) {
				    	if(workout[entry.body_focus] || workout[entry.difficulty]) {
					      found.push(entry);
					    } else {
					    	found.push(entry);
					    }
					}

					else if (workout[entry.body_focus] && workout[entry.difficulty]) {
						found.push(entry);
					}

					else if (workout[entry.body_focus] || workout[entry.difficulty]) {
						found.push(entry);
					} 

				}
				AppActions.receiveWorkouts(found);
			}.bind(this),
			error: function(xhr, status, err){
				alert(err);
			}.bind(this)
		});
	},

	UserLogin: function(user) {
		firebase.auth().signInWithEmailAndPassword(user.email, user.password)
		.then(AppActions.successLogin)
		.catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorMessage);
			alert(errorMessage);
		});
		
	},

	UserSignup: function(user) {
		firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
		.then(AppActions.successLogin)
		.catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorMessage);
		});
	}
}

/*entry.title.toLowerCase().indexOf(searchkey) !== -1*/