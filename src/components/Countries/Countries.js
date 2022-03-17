import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div className='countries_box'>
            <h1> React Api Country Details </h1>
            <div className='countries_child_box'>
                {
                    // countries.map(country=><Country 
                    //     name={country.name.common} 
                    //     population={country.population}
                    //     region={country.region}
                    //     area={country.area}
                    //     ></Country>)

                    // or shortly can do this
                    
                    countries.map(country=><Country 
                        country={country}
                        key={country.cca3} 
                        ></Country>)
                    
                }
            </div>
        </div>
    );
};

export default Countries;