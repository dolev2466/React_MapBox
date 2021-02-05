import { useState, useRef, useEffect, useCallback } from 'react';
import ReactMapGL, { ViewportProps } from 'react-map-gl';
import { callbackify } from 'util';

const Map = () => {
  const mapDivRef = useRef<HTMLDivElement>(null);

  const [viewport, setViewport] = useState<ViewportProps>({
    latitude: 31.601305,
    longitude: 34.761331,
    zoom: 5,
    height: 0,
    width: 40,
  });

  const changeSizes = useCallback(
    () =>
      mapDivRef.current &&
      setViewport({
        ...viewport,
        width: mapDivRef.current.clientWidth,
        height: mapDivRef.current.clientHeight,
      }),
    []
  );

  useEffect(() => {
    changeSizes();
  }, [changeSizes]);

  return (
    <div
      style={{ width: '100vw', height: 'calc(100vh - 90px)' }}
      ref={mapDivRef}
    >
      <ReactMapGL
        {...viewport}
        mapStyle='mapbox://styles/mapbox/satellite-streets-v11'
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(nextViewport: ViewportProps) =>
          setViewport(nextViewport)
        }
      />
    </div>
  );
};

export default Map;
