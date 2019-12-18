import React from 'react'
import { GoogleMap } from 'react-google-maps'

class Map extends React.Component {
    render() {
        return (
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{ lat: 37.773972, lng: -122.431297 }} 
                // defaultOptions={{ styles: mapStyles }}
            />
        )
    }
}

export default Map 