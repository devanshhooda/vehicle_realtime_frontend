import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapProps from '../props/MapProps';

const SetViewOnLoad = ({ center }: { center: number[] }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(center, 8)
    }, [center]);
    return null;
};

const Map = ({ gps }: MapProps) => {
    const center = [gps[0], gps[1]];

    return (
        <div className="w-72 h-72">
            <MapContainer className="w-full h-full">
                <SetViewOnLoad center={center} />
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
