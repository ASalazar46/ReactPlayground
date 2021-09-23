import React from "react";
import '../../node_modules/leaflet/dist/leaflet.css';
import './map.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export class Map extends React.Component {
    render() {
        return(
            <MapContainer id='mapid' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        );
    };
}