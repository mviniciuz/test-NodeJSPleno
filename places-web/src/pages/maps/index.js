import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, MarkerClusterer, Marker } from '@react-google-maps/api';

import api from '../../services/api';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

function Maps() {
  const [locations, setLocations] = useState([]);
  const [center, setCenter] = useState({});


  useEffect(() => {
    async function loadData() {

      const response = await api.get('/places');

      console.log(response.data);

      setCenter({
        lat: response.data[0].lat,
        lng: response.data[0].lng
      });

      setLocations(response.data);
    }
    loadData();
  }, []);

  function createKey(location) {
    return location.lat + location.lng
  }

  const options = {
    imagePath:
      'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
  }

  return (
    <LoadScript
      googleMapsApiKey={process.env.API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
      >

        <MarkerClusterer options={options}>
          {(clusterer) =>
            locations.map((location) => (
              <Marker key={createKey(location)} position={location} clusterer={clusterer} />
            ))
          }
        </MarkerClusterer>

        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default Maps;