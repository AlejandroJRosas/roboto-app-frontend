import io from "socket.io-client";

const useSockets = () => {

    const socket = io('http://0.tcp.ngrok.io:12545');
    return socket;
}

export default useSockets;
