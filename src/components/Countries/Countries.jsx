import React, { use } from 'react';
import Country from '../country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries);
    return (
        <div>
            <h2>countries here</h2>
            <h4>Countries: {countries.length}</h4>
            <div className='countries'>
                {
                countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;