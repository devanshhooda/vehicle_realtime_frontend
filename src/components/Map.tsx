import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapProps from '../props/MapProps';

const SetViewOnLoad = ({ center, zoomLevel }: { center: number[], zoomLevel: number }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(center, zoomLevel)
    }, [center]);
    return null;
};

const Map = ({ gps }: MapProps) => {
    const zoomLevel = 8; // Set zoom level of map as per your preference
    const center = [gps[0], gps[1]];

    return (
        <div className="w-60 h-60">
            <MapContainer className="w-full h-full">
                <SetViewOnLoad center={center} zoomLevel={zoomLevel} />
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center}>
                    <Popup>
                        Driver's current <br /> Location
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;
