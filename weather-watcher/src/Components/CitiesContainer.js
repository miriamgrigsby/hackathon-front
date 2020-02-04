import React from 'react'
import {Button} from "./Button"

export const CitiesContainer = ({cities, showCity}) => {

  
const findCity = cities.map(city => {
    console.log(city)
    return <Button className={city.name} city={city} showCity={showCity} />
})
   // map through all the cities and make a new button for each city
//    in buttons, have onclick with a handleclick function, that handleclick takes showCity func and pass in city obj
    return (
        <div className="city-map">

            {findCity}
           

        </div>
    )
}
