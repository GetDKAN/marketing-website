import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react'
import { fitBounds } from 'google-map-react/utils'
import Marker from '../components/Marker'
import sites from '../../data/sites.json'

const points = sites.map((item, i) => {
  return (
      <Marker key={i}
        name={item.title}
        lat={item.lat}
        lng={item.lng}
        index={i}
      />
  );
})
// const bounds = new this.props.google.maps.LatLngBounds();
// for (var i = 0; i < points.length; i++) {
//   bounds.extend(points[i]);
// }

const SitesMap = (props) => {
  const [center, setCenter] = useState({lat: 0, lng: 0 });
  const [zoom, setZoom] = useState(-1);

  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.GATSBY_GOOGLE_API_KEY}` }}
        defaultCenter={center}
        defaultZoom={zoom}
        //bounds={bounds}
        yesIWantToUseGoogleMapApiInternals
      >
        {points}
      </GoogleMapReact>
    </div>
  );

}

export default SitesMap;
