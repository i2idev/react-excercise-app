import React from 'react';
import AppActions from './actions/AppActions.jsx';
import AppStore from './stores/AppStore.jsx';
import Header from './Header.jsx';
import { Router, Route, hashHistory, Link } from 'react-router';

var About = React.createClass({
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
					<section className='about-us'>
						<h2 className='section-header text-center'>About Us</h2>
						<div className='row'>
							<div className='col-md-6'>
								<p>WELLBEING was founded 10 years ago in Chicago, IL, with one simple concept: create an affordable, friendly, fun and welcoming fitness environment that encourages, educates, and motivates clients to achieve their health and fitness goals. WELLBEING members have embraced this non-intimidating atmosphere and have achieved great results.</p>
							</div>
							<div className='col-md-6'>
								<p>Outstanding client relationships, sparkling clean facilities, and a professional, caring, certified staff are some of the reasons WELLBEING has clients who have been members since day one. We proudly serve the community by improving the health and fitness of our citizens, one person at a time.</p>
							</div>
						</div>
					</section>
					<section className='about-events'>
						<h2 className='section-header text-center'>Events</h2>
						<div className='row'>
							<div className='col-md-4'>
							<img src='https://cloud.githubusercontent.com/assets/11888590/21391632/2f6e6fbc-c795-11e6-863f-1fc9656b6961.jpg'/>
							<h4><Link to='#'>The Yoga Expo 2016 Los Angeles</Link></h4>
							<p>The Yoga Expo is an all-day yoga event featuring local & national teachers. Studios showcase their unique styles of mind & body practice. The Yoga Expo serves as a platform to empower and strengthen the local yoga community.</p>
							</div>
							<div className='col-md-4'>
								<img src='https://cloud.githubusercontent.com/assets/11888590/21391631/2f6b7ea6-c795-11e6-9279-afee8b6835c3.jpg'/>
								<h4><Link to='#'>Fitness Body Boom Bootcamp</Link></h4>
								<p>Body Boom Bootcamp is an intensive six week course created by WELLBEING, to reduce weight and body fat in the quickest amount of time. Body Boom Bootcamp is challenging mentally and physically, fun and pushes you to your absolute limit.</p>
							</div>
							<div className='col-md-4'>
								<img src='https://cloud.githubusercontent.com/assets/11888590/21391633/2f6e4fbe-c795-11e6-9948-2655a9c508e1.jpg'/>
								<h4><Link to='#'>The WELLBEING Challenge</Link></h4>
								<p>As WELLBEING is an Explosive New Health Movement in Chicago, we are dedicated to restoring Health. Our upcoming event called “The WELLBEING Challenge” is open to anyone above the age of 16 looking to transform their wellbeing.</p>
							</div>
							<div className='btn-wrapper text-center'>
								<a className='btn btn-default'>Read More</a>
							</div>
						</div>
					</section>
					<section className='why-us'>
						<h2 className='section-header text-center'>WHY US</h2>
						<div className='row'>
							<div className='col-md-6'>
								<h4>01. Developing Coordination</h4>
								<p>Coordination basically means firing the right muscle fibers at the right time for a given physical task. Thus, stability and balance are just different aspects of coordination.</p>
							</div>
							<div className='col-md-6'>
								<h4>02. Improving Flexibility</h4>
								<p>The exercises in your workout combined with nutrition, hydration, and lifestyle choices can have a huge impact on your flexibility.</p>
							</div>
							<div className='col-md-6'>
								<h4>03. Increasing Strength and Power</h4>
								<p>There are many facets to working out that include aerobics and flexibility in addition to strength and power. The latter are pretty similar but in fact very different.</p>
							</div>
							<div className='col-md-6'>
								<h4>04. Establishing Great Workout Habits</h4>
								<p>We all have friends who, despite hectic schedules, never miss a day at the gym. They can't stop smiling after yoga class, and their workout habits play a great role in training.</p>
							</div>
						</div>
					</section>

				</div>
			</div>
		)
	}
});

module.exports = About;
