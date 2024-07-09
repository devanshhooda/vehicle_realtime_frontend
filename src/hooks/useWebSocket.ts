import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import VehicleProps from '../props/VehicleProps';

const useWebSocket = (url: string): VehicleProps | null => {
    const [data, setData] = useState<VehicleProps | null>(null);

    useEffect(() => {
        const socket: Socket = io(url);

        socket.on('data', (newData: VehicleProps) => {
            setData(newData);
        });

        return () => {
            socket.disconnect();
        };
    }, [url]);

    return data;
};

export default useWebSocket;
