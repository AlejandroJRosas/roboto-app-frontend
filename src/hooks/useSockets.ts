import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

const useSocket = (): Socket | null => {
    const [socket, setSocket] = useState<Socket | null>(null);
    
    useEffect(() => {
        const socket = io('http://localhost:4050');
        setSocket(socket);

        return () => {
            socket.disconnect();
        }
    }, []);

    return socket;
}

export default useSocket;
