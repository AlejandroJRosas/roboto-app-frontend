import { useCallback, useEffect, useState } from "react";
import { Socket } from "socket.io-client";

export default function(socket: Socket | null) {
    const [isConnected, _setIsConnected] = useState(false);

    const setIsConnected = useCallback((newIsConnected: boolean) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let timeout: any = null;

        const updateIsConnected = (value: boolean) => {
            _setIsConnected(value);
        };

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            updateIsConnected(false);
        }, 3000);

        updateIsConnected(newIsConnected);
    }, []);

    useEffect(() => {
        if (!socket) return;

        socket.onAny(() => {
            setIsConnected(true);
        });
    }, [setIsConnected, socket]);

    return isConnected;
}
