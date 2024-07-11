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

            // Converting the gps data 
            const gpsStr: string = newJsonData.gps;
            const gpsStrArr: string[] = gpsStr.split("|");
            const gpsData: [number, number] = [Number(gpsStrArr[0]), Number(gpsStr[1])]
            newJsonData.gps = gpsData;

            // console.log(`newJsonData: ${JSON.stringify(newJsonData)}`);
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
