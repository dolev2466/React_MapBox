import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = ()=> {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 31.601305,
    longitude: 34.761331,
    zoom: 5
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}

export default Map