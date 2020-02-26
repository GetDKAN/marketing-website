import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react'
import { fitBounds } from 'google-map-react/utils'
import Marker from '../components/Marker'
import sites from '../../data/sites.json'

const content = sites.map((item, i) => {
  return (
      <Marker key={i} 
        name={item.title} 
        lat={item.lat}
        lng={item.lng}
        index={i}
      />
  );
})

const SitesMap = (props) => {
  const [center, setCenter] = useState({lat: 65.67111111111112, lng: 95.17492654697409 });
  const [zoom, setZoom] = useState(-1);
  const bounds = {
    ne: {
      lat: 50.01038826014866,
      lng: -118.6525866875
    },
    sw: {
      lat: 32.698335045970396,
      lng: -92.0217273125
    }
  };
  
  return (
    <div style={{ height: '70vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.GOOGLE_MAPS_API_KEY}` }}
        defaultCenter={center}
        defaultZoom={zoom}
        bounds={bounds}
      >
        {content}
      </GoogleMapReact>
    </div>
  );

}
  
export default SitesMap;