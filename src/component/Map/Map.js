
import React,{useState,useEffect} from 'react'

import './map.css'
import "../../../node_modules/leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Maps = ({ data }) => {
   const [state, setstate] = useState([28.6139,77.2090])
   useEffect(() => {
    if(data.length!==0) 
    setstate(data);
    console.log(data)
     return () => {
       
     }
   }, [data])
  
  return (
     
      <MapContainer center={state} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={state}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

  )
}

export default Maps
