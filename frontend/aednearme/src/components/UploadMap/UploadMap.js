import React, { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow, LoadScript } from "@react-google-maps/api";
import mapStyles from './mapStyles';
import axios from 'axios'


const UploadMap = () => {
  const baseUrl = "http://127.0.0.1:8000"

  const [aedData, setAedData] = useState([])
  const [ markers, setMarkers ] = useState([])

  useEffect(() => {
    try{
      axios.get(baseUrl + '/aed/')
      .then((res) => {
        setAedData(res.data.data)
      })
    } catch (error) {
      console.log(error)

    }
  }, [])
  

  const containerStyle = {
      width: '60vw',
      height: '60vh',
  };

  // Hard coded center at Futureproof
  const center = {
      lat: markers[0] ? markers[0].lat : 51.4967001,
      lng: markers[0] ? markers[0].lng : -0.1356203
  };

  const options = {
    styles: mapStyles,
    zoomControl: true
  };


  // Gets current position of user
  const [currentLat, setCurrentLat] = useState();
  const [currentLong, setCurrentLong] = useState();

if('geolocation' in navigator){
  navigator.geolocation.getCurrentPosition(position => {
    const currentLat = position.coords.latitude;
    setCurrentLat(currentLat)
    const currentLong = position.coords.longitude;
    setCurrentLong(currentLong)
  })
} else {
  console.log('geolocation not available')
}

const position = aedData.map((aed, index) => {
    return {
      lat: parseFloat(aed.lat),
      long: parseFloat(aed.long),
      photo_url: aed.photo_url
    }
})

const [selectedAED, setSelectedAED] = useState(null);




  return {
    markers,
    render:(
    <LoadScript googleMapsApiKey="AIzaSyATeYFTD2ha1aawscSrtZxJfJ3m89DB_JU">
        <GoogleMap 
            mapContainerStyle={containerStyle} 
            zoom={11} 
            center={center} 
            options={options}
            onClick={(event) => {
              setMarkers(current => [
                {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                time: new Date()
              },
              ])
            }}>
            {markers.map(marker => <Marker 
                key={marker.time.toISOString()}
                position={{ lat: marker.lat, lng: marker.lng}}></Marker>
              )}
          {position.map((aed) => {
            return <Marker 
              key={aed.id}
              position={{lat: aed.lat, lng: aed.long}}
              onClick={() => {
                setSelectedAED(aed);
              }}/>
          })}
       
        {selectedAED && (
          <InfoWindow
            position={{lat: selectedAED.lat, lng: selectedAED.long}}
            onCloseClick={() => {
              setSelectedAED(null)
            }}>
            <div>
            <img width={"200px"} src={selectedAED.photo_url} />
              <ul>
                <li>Latitude: {selectedAED.lat}</li>
                <li>Longitude: {selectedAED.long}</li>
              </ul>
            
            </div>
          </InfoWindow>
        )}
        
        </GoogleMap>

        
    </LoadScript>
  )}
}

export default UploadMap

