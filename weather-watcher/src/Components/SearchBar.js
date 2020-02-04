import React from 'react'

export const SearchBar =({searchTerm, updateSearchTerm, filterCity}) => {

    const handleChange = (event) => {
        updateSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        console.log("yolo")
        filterCity()
    }
        return (
            <div className="search">
                <form > 
                <input className="form" type="text" value={searchTerm} onChange={handleChange} placeholder="Choose a City"/>
                <button onClick={handleSubmit}>Search</button>
                </form>
            </div>
        )
}

