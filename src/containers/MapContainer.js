import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '95%',
}

class MapContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      places: [
        { lat: 37.7880, lng: -122.431297 },
        { lat: 37.7880, lng: -122.4076 },
        { lat: 37.7757, lng: -122.4180 },
        { lat: 37.7786, lng: -122.3893 }
      ]
    }
  }

  displayMarkers = () => {
    return this.state.places.map((place, index) => {
      return <Marker key={index} id={index} position={{
        lat: place.lat,
        lng: place.lng
      }}
        onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={{ lat: 37.773972, lng: -122.431297 }}
      >
        {this.displayMarkers()}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCy65XxkNuvC1LAUhQGbwXo0VyRKk9nbZk'
})(MapContainer);