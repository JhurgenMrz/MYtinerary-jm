import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as citiesActions from '../actions/citiesActions';

const Cities = props => {


	const handleEnter = (e) => {
    if(e.key === 'Enter'){
      props.searchCities((e.target.value).toLowerCase())
    }
    
  };
  
  const handleChange = e =>{
    props.changeInput((e.target.value).toLowerCase())
  }

	useEffect(() => {
		if (!props.cities.length) {
			props.getAllCities();
		}
	}, []);

	return (
		<div style={{ margin: 20 }}>
			<h3> CITIES </h3>
			<section className='search'>
				<label>Search:</label>
				<input
          onChange={handleChange}
          onKeyDown={handleEnter}
          // value={(props.word.toUpperCase())}
          placeholder='City...'
          value={(props.word).toUpperCase()}
				></input>
			</section>
			<section className='Cities'>
				{props.loading ? (
					<h3>Cargando...</h3>
				) : props.error ? (
					<h3>{props.error}</h3>
				) : (props.filterCities.length !== 0) ? (
					props.filterCities.map((el, index) => (
						<div className='City' key={index}>
							<h5> {el.country} </h5> <p> {el.city_name} </p>
						</div>
					))
				) : props.cities.map((el, index) => (
						<div className='City' key={index}>
							<h5> {el.country} </h5> <p> {el.city_name} </p>
						</div>
					))
        }
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
