import React from 'react'

const currentLocation = "hello"


class Discover extends React.Component {
    constructor() {
        super()
        this.state = {
            location: ''
        }
    }

    componentDidMount() {
        fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.775082,%20-122.417184&radius=500&type=cafe&key=AIzaSyCy65XxkNuvC1LAUhQGbwXo0VyRKk9nbZk",
            {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Methods': 'POST, GET'
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }

    render() {
        return (
            <div>
                {this.getCurrentLocation}
            </div>
        )
    }
}

export default Discover