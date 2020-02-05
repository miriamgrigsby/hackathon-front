import React from 'react'

export const CitiesWatch = ({city, stats}) => {
//     const stats = (cities.map(city => city.city_weathers[0])).map(stat => stat)
//     console.log(city)
   console.log(stats)
// const stats = city.city_weathers.map(stat => {
// })
    return (
        <div className="show-city">
            <h2>City: {city.name}</h2>
            <h2>State: {city.state}</h2>
            <h2 className="total-summary">{stats.daily_summary} </h2>
            <h3 className="temperature">Temperature: {stats.temperature}</h3>
            <h3 className="latitude">Latitude: {city.Latitude}</h3>
            <h3 className="longitude">Longitude: {city.Longitude}</h3>
            <h3 className="gust">Wind Gust: {stats.windgust}</h3>
            <h3 className="speed"> Wind Speed: {stats.windspeed}</h3>
            <h3 className="summary">Summary: {stats.summary}</h3>
        </div>
    )
}
