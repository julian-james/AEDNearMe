import React from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow, LoadScript } from "@react-google-maps/api";
import mapStyles from './mapStyles';

const MainMap = () => {

  const containerStyle = {
      width: '60vw',
      height: '60vh',
  };
  const center = {
      lat: 51.4967001,
      lng: -0.1356203
  }
  const options = {
    styles: mapStyles
  }

  
//   if (loadError) return "Error loading maps"
//   if(!isLoaded) return "Loading Maps"; 

  return (
    <LoadScript googleMapsApiKey="AIzaSyATeYFTD2ha1aawscSrtZxJfJ3m89DB_JU">
        <GoogleMap mapContainerStyle={containerStyle} zoom={17} center={center} options={options}></GoogleMap>
    </LoadScript>
  )
}

export default MainMap