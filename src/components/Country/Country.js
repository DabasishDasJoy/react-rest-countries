import React from 'react';
import './Country.css';
const Country = (props) => {
    const {name, population, area} = props;
    return (
        <div className='county'>
            <h1>Country: {name}</h1>
            <p>Population: {population}</p>
            <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;