import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import useRobotoContext from '../hooks/useRobotoContext';
import { UCAB_GUAYANA_LOCATION } from '../hooks/useRobotoLocation';

// Fix for default marker icons in React-Leaflet
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as unknown as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export const MapComponent = () => {
  const { coordinates } = useRobotoContext();
  
  return (
    <div className="h-[200px] sm:h-[300px] rounded-lg overflow-hidden">
      <MapContainer
        center={[UCAB_GUAYANA_LOCATION.latitude, UCAB_GUAYANA_LOCATION.longitude]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          coordinates && (
            <Marker position={[coordinates.latitude, coordinates.longitude]}>
              <Popup>
                Robot Location<br />
                {coordinates.latitude.toFixed(4)}°, {coordinates.longitude.toFixed(4)}°
              </Popup>
            </Marker>
          )
        }
      </MapContainer>
    </div>
  );
};