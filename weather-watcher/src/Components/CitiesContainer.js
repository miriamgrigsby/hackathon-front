import React from 'react'
import {Button} from "./Button"

export const CitiesContainer = ({cities, showCity}) => {

  
const findCity = cities.map(city => {
    return <Button className={city.name} key={city.id} city={city} showCity={showCity}/>
})


    return (
        <div className="city-map">

            {findCity}
           
        </div>
    )
}
