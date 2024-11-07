import { useMemo } from "react";
import io from "socket.io-client";

const useSockets = () => {
  const socket = useMemo(() => io("http://localhost:4050"), []);

  return socket;
};

export default useSockets;
