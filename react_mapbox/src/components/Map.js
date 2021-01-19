import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Api_mock from "../Api_mock";
import PlaceInfo from "./PlaceInfo";
import "./css/map.css";
const Map = () => {
  const [places, setplaces] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [viewport, setViewport] = useState({
    width: "92vw",
    height: "94vh",
    latitude: 31.601305,
    longitude: 34.761331,
    zoom: 5,
    padding: 0,
  });

  useEffect(() => {
    const temp = Api_mock();
    console.log(temp);
    setplaces(temp);
  }, []);

  const showAddMarkerPopup = (event)=>{
    console.log(event);
  }

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      onDblClick={showAddMarkerPopup}
    >
      {places.map((place) => (
        <Fragment>
          <Marker
            key={place.id}
            latitude={place.lat}
            longitude={place.lon}
            offsetLeft={-12}
            offsetTop={-24}
          >
            <div
              onClick={() =>
                setShowPopup({
                  showPopup,
                  [place.id]: true,
                })
              }
            >
              <svg
                className="purpleMarker"
                style={{
                  height: `${6 * viewport.zoom}px`,
                  width: `${6 * viewport.zoom}px`,
                }}
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
              >
                <g>
                  <g>
                    <path
                      d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
                        c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
                        c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </Marker>
          {showPopup[place.id] ? (
            <Popup
              latitude={place.lat}
              longitude={place.lon}
              closeButton={true}
              closeOnClick={false}
              onClose={() =>
                setShowPopup({
                  showPopup,
                  [place.id]: false,
                })
              }
              anchor="top"
            >
              <PlaceInfo name={place.name} comments={place.comments}>
              </PlaceInfo>
            </Popup>
          ) : null}
        </Fragment>
      ))}
    </ReactMapGL>
  );
};

export default Map;
