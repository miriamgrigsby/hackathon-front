import React from 'react'

export const Button = ({city, showCity}) => {
    console.log(showCity)

    const handleClick = (event) => {
        showCity(city)
    }

    return (
        <div >
            <button className={city.state} onClick={handleClick}> {city.name} </button>
        </div>
    )
}
