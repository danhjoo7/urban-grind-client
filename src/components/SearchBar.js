import React from 'react'

const SearchBar = (props) => {
    return (
        <div className="search-bar">
            <form className="form-box">
                <h2>Discover Cafes/Coffee Shops</h2>
                <input type="text" className="search-cafe" placeholder="Search City"/>
                <button className="search-btn" type="button">Search</button>
            </form>
        </div>
    )
}

export default SearchBar 