import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import * as citiesActions from '../actions/citiesActions';

const Cities = props => {
	const handleOnChange = (e, cities) => {
		let value = e.target.value.toLowerCase();
		console.log(value);
	};

	useEffect(() => {
		console.log(props.cities);
		if (!props.cities.length) {
			props.getAllCities();
			console.log(props.cities);
		}
	}, [props.cities]);

	return (
		<div style={{ margin: 20 }}>
			<h3> CITIES </h3>
			<section className='search'>
				<label>Search</label>
				<input
					onChange={e => {
						handleOnChange(e, props.cities);
					}}
				></input>
			</section>
			<section className='Cities'>
				{props.loading ? (
					<h3>Cargando...</h3>
				) : props.error ? (
					<h3>{props.error}</h3>
				) : props.cities ? (
					props.cities.map((el, index) => (
						<div className='City' key={index}>
							<h5> {el.country} </h5> <p> {el.city_name} </p>
						</div>
					))
				) : (
					''
				)}
			</section>
		</div>
	);
};

const mapStateToProps = reducers => {
	return reducers.citiesReducer;
};

export default connect(
	mapStateToProps,
	citiesActions
)(Cities);
