import useKonamiCode from "../hooks/useKonamiCode";
import useRobotoLocation from "../hooks/useRobotoLocation";
import useRobotoStream from "../hooks/useRobotoStream";
import useSocket from "../hooks/useSockets";
import RobotoContext from "./RobotoContext";
import useIsConnected from "../hooks/useIsConnected";
import useRobotoStatus from "../hooks/useRobotoStatus";

export const RobotoContextProvider = ({ children }: Props) => {
  const socket = useSocket();
  const robotoLocationHook = useRobotoLocation();
  const robotoStreamHook = useRobotoStream();
  const robotoKonamiHook = useKonamiCode();
  const robotoStatusHook = useRobotoStatus();
  const isConnected = useIsConnected(socket);
  
  const contextValue = {
    ...robotoLocationHook,
    ...robotoStreamHook,
    ...robotoKonamiHook,
    ...robotoStatusHook,
    socket,
    isConnected,
  };

  return (
    <RobotoContext.Provider value={contextValue}>
      {children}
    </RobotoContext.Provider>
  );
};

interface Props {
  children: React.ReactNode;
}

export default RobotoContextProvider;
