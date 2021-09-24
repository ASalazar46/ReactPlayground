import React from "react";
import L from 'leaflet';
import icon from '../../node_modules/leaflet/dist/images/marker-icon.png';
import iconShadow from '../../node_modules/leaflet/dist/images/marker-shadow.png';    
import '../../node_modules/leaflet/dist/leaflet.css';
import './map.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export class Map extends React.Component {
    render() {
        let markerGet = L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow,
        });
        L.Marker.prototype.options.icon = markerGet;
        return(
            <MapContainer id='mapid' center={[21.2982, -157.8171]} zoom={17} scrollWheelZoom={false} className="box-border border-4 p-4">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[21.2982, -157.8171]}>
                    <Popup>
                        I am a weatherbox located on the roof of this building.
                    </Popup>
                </Marker>
            </MapContainer>
        );
    };
}