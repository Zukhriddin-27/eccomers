import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
// AIzaSyCjKJlcsiYsV7H43NwHpGvLHHZEOEoO1QI

const containerStyle = {
  height: '416px',
  width: '66%',
}

const center = {
  lat: 41.27919,
  lng: 69.215226,
}

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey='AIzaSyCjKJlcsiYsV7H43NwHpGvLHHZEOEoO1QI'>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)
