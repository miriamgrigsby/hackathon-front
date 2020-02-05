import React from 'react'

export const Button = ({city, showCity}) => {

    const handleClick = (event) => {
        event.preventDefault()
        showCity(city)
    }

    return (
        <div >
            <button className={city.state} onClick={handleClick}> {city.name} </button>
        </div>
    )
}
