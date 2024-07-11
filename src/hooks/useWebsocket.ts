import { useEffect, useState } from 'react';
import VehicleProps from '../props/VehicleProps';

const useWebsocket = (url: string): VehicleProps[] => {
    const [data, setData] = useState<VehicleProps[]>([]);

    useEffect(() => {
        const socket = new WebSocket(url);

        socket.onopen = () => {
            console.log('WebSocket connection opened');
        };

        socket.onmessage = (event) => {

            const newJsonData = JSON.parse(event.data);

            const gpsStr: string = newJsonData.gps;
            newJsonData.gps = gpsStr.split("|");

            console.log(`newJsonData: ${JSON.stringify(newJsonData)}`);
            const newData: VehicleProps = newJsonData;
            setData((prevData) => [...prevData, newData]);
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };
    }, [url]);

    return data;
};

export default useWebsocket;
