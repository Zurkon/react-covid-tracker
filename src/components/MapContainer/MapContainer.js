import React from 'react';

import { Map, TileLayer } from 'react-leaflet';

import PlotDisplay from '../PlotDisplay/PlotDisplay';

import useStyles from './MapContainer.styles';
import 'leaflet/dist/leaflet.css';

const MapContainer = ({ center, zoom, countries, casesType }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Map id="mapContainer" center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <PlotDisplay data={countries} casesType={casesType} />
      </Map>
    </div>
  )
}

export default MapContainer;