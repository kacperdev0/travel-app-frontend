import React, {useEffect} from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import styles from '../CSS/MapStyle.module.css';
import { LatLngBounds } from 'leaflet';

const FitMapToBounds = ({ center, points }) => {
  const map = useMap();

  useEffect(() => {
    if (points.length > 0) {
      const bounds = new LatLngBounds(points.map(point => [point.lat, point.lon]));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, points]);
  map.setView(center);
  return null;
};

const MapComponent = ({ location, points, setSelectedElement, zoom }) => {

  return (
      <MapContainer center={location} zoom={zoom} style={{height: "90vh", position:"relative"}}>
            <FitMapToBounds center={location} points={points} />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {points.map((element, index) => (
              <Marker
                key={index}
                position={[element.lat, element.lon]}
                eventHandlers={{
                  click: () => {
                    setSelectedElement(element);
                  },
                }}
              />
            ))}
    </MapContainer>
  );
};

export default MapComponent;
