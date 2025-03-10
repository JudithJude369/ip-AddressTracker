import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet';
import marker from '@/assets/images//icon-location.svg';
import L from 'leaflet';

const myIcon = L.icon({
  iconUrl: marker,
  iconSize: [30, 45],
  iconRetinaUrl: marker,
  popupAnchor: [0, -0],
});

function LocationMap({ center }) {
  const map = useMap();
  map.flyTo(center);
  return null;
}

const Map = ({ data }) => {
  return (
    <MapContainer
      center={[data.latitude, data.longitude]}
      zoom={13}
      scrollWheelZoom={false}
      className="leaflet-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[data.latitude, data.longitude]} icon={myIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <LocationMap center={[data.latitude, data.longitude]} />
    </MapContainer>
  );
};

export default Map;
