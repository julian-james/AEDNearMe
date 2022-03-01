import React from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow, LoadScript } from "@react-google-maps/api";
import mapStyles from './mapStyles';

const UploadMap = () => {
    const containerStyle = {
      width: '100%',
      height: '70vh',
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
  
    const position = { lat: 51.496576, lng: -0.134824}
  
  const aedInfo = () => {
      <InfoWindow position={position}>
          <div><h2>AED here</h2></div>
      </InfoWindow>
  }
  
  
  // AED Marker is hard coded atm, change to environment variables
    return (
      <LoadScript googleMapsApiKey="AIzaSyATeYFTD2ha1aawscSrtZxJfJ3m89DB_JU">
          <GoogleMap 
              mapContainerStyle={containerStyle} 
              zoom={17} 
              center={center} 
              options={options}>
          <Marker 
              position={{lat: 51.496576, lng: -0.134824}}
              onClick={aedInfo}>   
          </Marker>
          
          </GoogleMap>
  
          
      </LoadScript>
    )
  }
export default UploadMap