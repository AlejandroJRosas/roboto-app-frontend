import { createContext } from "react";
import { RobotoLocationHook } from "../hooks/useRobotoLocation";
import { RobotoStreamHook } from "../hooks/useRobotoStream";
import { Socket } from "socket.io-client";
import { KonamiCodeHook } from "../hooks/useKonamiCode";
import { MovementMode, RobotoStatusHook } from "../hooks/useRobotoStatus";

const RobotoContext = createContext<RobotoContextI>({
  streamFrame: null,
  setStreamFrame: function (): void {
    throw new Error("Function not implemented.");
  },
  robotoLocation: {
    coordinates: null,
    heading: null,
    altitudeInMetters: null,
    direction: null,
    orientation: null,
    speed: null
  },
  setHeading: function (): void {
    throw new Error("Function not implemented.");
  },
  setDirection: function (): void {
    throw new Error("Function not implemented.");
  },
  setCoordinates: function (): void {
    throw new Error("Function not implemented.");
  },
  coordinates: null,
  socket: null,
  konamiActivated: false,
  addToSequence: function (): void {
    throw new Error("Function not implemented.");
  },
  isConnected: false,
  orientation: null,
  setOrientation: function (): void {
    throw new Error("Function not implemented.");
  },
  speed: null,
  setSpeed: function (): void {
    throw new Error("Function not implemented.");
  },
  changeRobotoStatus: function (): void {
    throw new Error("Function not implemented.");
  },
  robotoStatus: {
    movementMode: MovementMode.CONTROL,
    running: false,
    movementSpeed: 0
  },
  setMovementMode: function (): void {
    throw new Error("Function not implemented.");
  },
  setMovementSpeed: function (): void {
    throw new Error("Function not implemented.");
  }
});

export type RobotoContextI = RobotoStreamHook & RobotoLocationHook & KonamiCodeHook & RobotoStatusHook & {
  socket: Socket | null;
  isConnected: boolean;
};


export default RobotoContext;
