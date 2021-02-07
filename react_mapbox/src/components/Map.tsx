import { useState, useRef, useEffect, useCallback } from 'react';
import ReactMapGL, { ViewportProps } from 'react-map-gl';

const Map = () => {
  const mapDivRef = useRef<HTMLDivElement>(null);

  const [viewport, setViewport] = useState<ViewportProps>({
    latitude: 31.601305,
    longitude: 34.761331,
    zoom: 5,
  });

  const [sizes, setSizes] = useState({
    height: 0,
    width: 0,
  });

  const changeSizes = useCallback(
    () =>
      mapDivRef.current &&
      setSizes({
        width: mapDivRef.current.clientWidth,
        height: mapDivRef.current.clientHeight,
      }),
    [mapDivRef]
  );

  useEffect(() => {
    changeSizes();
  }, [changeSizes]);

  return (
    <div
      style={{ width: '100vw', height: 'calc(100vh - 87px)' }}
      ref={mapDivRef}
    >
      <ReactMapGL
        {...viewport}
        height={sizes.height}
        width={sizes.width}
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
