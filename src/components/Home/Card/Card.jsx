import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
    const { id , title, cover } = props.accommodation 
    return ( 
        <Link className='accommodation' to={`/accommodation/${id}`}>
            <span className='background'></span>
            <img className='accommodation_img' src={`${cover}`} alt={`${title}`}/>
            <h2 className='accommodation_title'>{title}</h2>
        </Link>
    )
}

export default Card;