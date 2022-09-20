import React from 'react';
import './Country.css';
const Country = (props) => {
    //Destructuring nested object
    const {name:{common}, population, area, flags} = props.country;
    const imgSrc = flags.png;
    return (
        <div className='country'>
            <h1>Country: {common}</h1>
            <img src={imgSrc} alt="" />
            <p>Population: {population}</p>
            <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;