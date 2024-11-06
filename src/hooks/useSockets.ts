import io from "socket.io-client";

const useSockets = () => {

    const socket = io('http://localhost:4050');
    return socket;
}

export default useSockets;
