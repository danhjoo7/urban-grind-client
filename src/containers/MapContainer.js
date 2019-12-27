import React from "react"
import { GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'
import CurrentLocation from '../components/Map'

const mapStyles = {
    width: '100%',
    height: '95%'
}

class MapContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            places: [
                { name: 'Union Square', lat: 37.7880, lng: -122.4076 },
                { name: 'Oracle Park', lat: 37.7786, lng: -122.3893 },
                { name: 'Uber HQ', lat: 37.7757, lng: -122.4180 },
                { name: 'Japanese Tea Garden', lat: 37.7702, lng: -122.46956 }
            ]
        }
    }

    // displayMarkers = () => {
    //     return this.state.places.map((place, index) => {
    //         return <Marker key={index} id={index} name={place.name} position={{
    //             lat: place.lat,
    //             lng: place.lng
    //         }}
    //             onClick={this.onMarkerClick} />
    //     })
    // }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <CurrentLocation
                centerAroundCurrentLocation
                google={this.props.google}
            >
                {/* {this.displayMarkers()} */}
                <Marker 
                    onClick={this.onMarkerClick}
                    name={'Current Location'}
                    />
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Pier 39'}
                    position={{ lat: 37.8087, lng: -122.4098 }}
                />
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Japanese Tea Garden'}
                    position={{ lat: 37.7702, lng: -122.46956 }}
                />
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Oracle Park'}
                    position={{ lat: 37.7786, lng: -122.3893 }}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </CurrentLocation>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCy65XxkNuvC1LAUhQGbwXo0VyRKk9nbZk'
})(MapContainer);