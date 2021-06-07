import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Component } from 'react';
import { API_KEY } from '../../service/api-service.js'

class _MapCmp extends Component {

    state = {
        name: 'Karmiel Store',
        lat: 32.915993,
        lng: 35.297160
    }

    render() {
        const style = {
            margin: '10px auto',
            width: '50vw',
            height: '50vh'
        }
        return (
            <Map
                style={style}
                google={this.props.google}
                zoom={15}
                initialCenter={{
                    lat: 32.915993,
                    lng: 35.297160
                }}
                center={this.state}
            >
                <Marker
                    position={this.state}
                    name={'Current location'} />

                <InfoWindow
                    visible={true}
                    position={this.state}
                >
                    <div>
                        <h1>{this.state.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export const MapCmp = GoogleApiWrapper({
    apiKey: (API_KEY)
})(_MapCmp)




