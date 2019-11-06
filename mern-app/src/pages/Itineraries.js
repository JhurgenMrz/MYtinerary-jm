import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as itinerariesActions from '../actions/itinerariesActions';
import { Link } from 'react-router-dom';
import '../styles/Itineraries.css';

const Itineraries = props => {
	console.log(props);
	const cityId = props.match.params._id;

	useEffect(() => {
		props.getItineraries(cityId);
	}, []);

	function showStarts(count) {
		const starts = [];
		for (let i = 0; i < count; i++) {
			starts.push('star');
		}
		return starts;
	}

	return (
		<div className='Itineraries__container'>
			<section className='Itineraries__nav'>
				<Link to='/cities'>
					<button>Back</button>
				</Link>
				<h3>Itineraries</h3>
			</section>
			{props.itineraries.map(el => (
				<div key={el._id}>{el.title}</div>
			))}
		</div>
	);
};

const mapStateToProps = reducers => {
	return reducers.itinerariesReducer;
};

export default connect(
	mapStateToProps,
	itinerariesActions
)(Itineraries);
