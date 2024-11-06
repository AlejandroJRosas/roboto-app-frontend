import useKonamiCode from "../hooks/useKonamiCode";
import useRobotoLocation from "../hooks/useRobotoLocation";
import useRobotoStream from "../hooks/useRobotoStream";
import useSocket from "../hooks/useSockets";
import RobotoContext from "./RobotoContext";

export const RobotoContextProvider = ({ children }: Props) => {
  const socket = useSocket();
  const robotoLocationHook = useRobotoLocation();
  const robotoStreamHook = useRobotoStream();
  const robotoKonamiHook = useKonamiCode();

  const contextValue = {
    ...robotoLocationHook,
    ...robotoStreamHook,
    ...robotoKonamiHook,
    socket,
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
