import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react'
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
  const [center, setCenter] = useState({lat: 11.0168, lng: 76.9558 });
  const [zoom, setZoom] = useState(-41);
 
  return (
    <div style={{ height: '70vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.GOOGLE_MAPS_API_KEY}` }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {content}
      </GoogleMapReact>
    </div>
  );
}
 
export default SitesMap;