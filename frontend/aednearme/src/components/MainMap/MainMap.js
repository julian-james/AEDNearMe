import React, { useState } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow, LoadScript } from "@react-google-maps/api";
import mapStyles from './mapStyles';

const MainMap = () => {

  const containerStyle = {
      width: '60vw',
      height: '60vh',
  };
  // Hard coded center at Futureproof
  const center = {
      lat: 51.4967001,
      lng: -0.1356203
  }
  const options = {
    styles: mapStyles,
    zoomControl: true
  }

//   const Marker = {
//       postion: { lat: 51.496576, lng: -0.134824},
//       title: "AED here"
//   }
 

const aedInfo = () => {
    <InfoWindow>
        <div>AED here</div>
    </InfoWindow>
}


// AED Marker is hard coded atm
  return (
    <LoadScript googleMapsApiKey="AIzaSyATeYFTD2ha1aawscSrtZxJfJ3m89DB_JU">
        <GoogleMap 
            mapContainerStyle={containerStyle} 
            zoom={17} 
            center={center} 
            options={options}>
        <Marker position={{lat: 51.496576, lng: -0.134824}} onClick={aedInfo}/>
        </GoogleMap>

        
    </LoadScript>
  )
}

export default MainMap