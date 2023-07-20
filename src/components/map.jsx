"use client"
import React from 'react';
import { MapContainer, TileLayer, Marker} from 'react-leaflet';


export default function Map(props){
      const position = [0.41904665422857734, 9.450252669218797];
      return(
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} className={props.className}>
                  <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}></Marker>
            </MapContainer>
      );
}