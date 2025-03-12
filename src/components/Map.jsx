import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; //--added this
// import marker from '@/assets/images//icon-location.svg'; --no need for this, u can use it if u want though
import L from 'leaflet';
import { useEffect } from 'react';
//---added this to Fix for marker icons in Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// const myIcon = L.icon({
//   iconUrl: marker,
//   iconSize: [30, 45],
//   iconRetinaUrl: marker,
//   popupAnchor: [0, -0],
// });

const myIcon = new L.Icon({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Function to move the map when location changes
const LocationMap = ({ center }) => {
  const map = useMap();
  map.flyTo(center, 13); // Moves the map to the new location smoothly
  return null;
};

const Map = ({ data }) => {
  if (!data || !data.latitude || !data.longitude) return null; // Prevents crashing if data is missing

  const position = [data.latitude, data.longitude];

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Prevents page zooming instead of map zooming
    return () => {
      document.body.style.overflow = 'auto'; // Restores when component unmounts
    };
  }, []); // ---added this

  return (
    <MapContainer //added some features to be true for easy use
      center={position}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
      scrollWheelZoom={true} // Enables zooming with scroll
      zoomControl={true} // Enables zoom buttons
      dragging={true} // Enables panning
      doubleClickZoom={true} // Enables zooming on double-click
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position} icon={myIcon}>
        <Popup>
          <strong>Location:</strong> {data.city}, {data.countryName}
        </Popup>
      </Marker>

      <LocationMap center={position} />
    </MapContainer>
  );
};

export default Map;
