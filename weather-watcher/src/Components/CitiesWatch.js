import React from 'react'

export const CitiesWatch = ({city}) => {
   
    

    return (
        <div className="show-city">
             <h2>City: {city.name}</h2>
            <h2>State: {city.state}</h2>
            <h2>Lattitude: {city.Latitude}</h2>
            <h2>Longitude: {city.Longitude}</h2>
        </div>
    )
}
