import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SitesMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.805344,
      lng: -122.272286
    },
    zoom: 1
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.GOOGLE_MAPS_API_KEY}` }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-122.272286}
            lng={37.805344}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SitesMap;