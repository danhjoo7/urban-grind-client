import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '95%',
}

class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={11}
        style={mapStyles}
        initialCenter={{ lat: 37.773972, lng: -122.431297}}
      />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCy65XxkNuvC1LAUhQGbwXo0VyRKk9nbZk'
})(MapContainer);