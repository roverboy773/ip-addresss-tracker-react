import React from 'react'
import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet'
const Map = () => {
    const position = [51.505, -0.09]

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Your Location
          </Popup>
        </Marker>
      </MapContainer>
    )
}

export default Map
