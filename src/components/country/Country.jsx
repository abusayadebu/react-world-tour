import React, { useState } from 'react';
import './Country.css';

const Country = ({country}) => {
    // console.log(country.area.area);
    const [visited, setVisited] = useState(false) 

    const handleVisited = ()=>{
        if(visited){
            setVisited(false)
        }
        else{
            setVisited(true)
        }
    }
    return (
        <div className={`country ${visited && 'visited-country'}`}>
            <img className='img-style' src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Country Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area}</p>
            <p>{country.area.area > 300000 ? 'Big Country' : 'Small Country'}</p>
            <button onClick={handleVisited}>
                {
                    visited ? 'Visited' : 'Not Visited'
                }
                </button>
        </div>
    );
};

export default Country;