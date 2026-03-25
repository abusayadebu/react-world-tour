import React, { use, useState } from 'react';
import Country from '../country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([])
    const handleVisitedCountries = (country) =>{
        console.log('handle visiefjg clicked', country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }


    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries);
    return (
        <div>
            <h2>countries here</h2>
            <h4>Countries: {countries.length}</h4>
            <h4>Total Visited Countries: {visitedCountries.length}</h4>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                countries.map(country => <Country key={country.cca3.cca3} 
                    country={country}
                    handleVisitedCountries={handleVisitedCountries}
                    ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;