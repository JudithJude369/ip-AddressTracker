import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet';
import marker from '@/assets/images//icon-location.svg';
import L from 'leaflet';

const myIcon = L.icon({
  iconUrl: marker,
  iconSize: [30, 45],
  iconRetinaUrl: marker,
  popupAnchor: [0, -0],
});

const Map = () => {
  const position = [51.505, -0.09];

  function LocationMap({ center }) {
    const map = useMap();
    map.flyTo(center);
    return null;
  }
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="leaflet-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={myIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <LocationMap center={position} />
    </MapContainer>
  );
};

export default Map;
