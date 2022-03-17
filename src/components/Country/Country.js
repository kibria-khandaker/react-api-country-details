import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country);
    const {population,name,area,region,flags}=props.country;
    return (
        <div className='country_box'>
            <p> Name : <b>{name.common}</b> </p>
            <p><img src={flags.png} alt="" /></p>
            <p> population : {population} </p>            
            <p> region : {region} </p>
            <p> area : {area} </p>
        </div>
    );
};

export default Country;