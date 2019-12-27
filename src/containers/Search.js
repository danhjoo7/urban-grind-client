import React from 'react'
import CafeCard from '../components/CafeCard'



class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            search: '',
            results: []
        }
    }

    componentDidMount() {
        fetch("https://maps.googleapis.com/maps/api/place/details/json?")
    }

    handleOnChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    getResults = () => {
        
    }

    render() {
        return (                
            <div></div>
        )
    }
}

export default Search