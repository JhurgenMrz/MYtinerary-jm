import React from 'react';
import { CardImg } from '../CardImg';
import './CardImgContainer.css';

export const CardImgContainer = ({ data }) => {
	return (
		<div className='CardImgContainer'>
			{data.map((el, index) => (
				<CardImg img={el} city='Buenos Aires' key={index} />
			))}
		</div>
	);
};
