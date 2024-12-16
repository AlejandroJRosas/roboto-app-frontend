import { useEffect } from "react";
import { Header } from "./components/Header";
import { VideoFeed } from "./components/VideoFeed";
import { Controls } from "./components/Controls";
import { GPSInfo } from "./components/GPSInfo";
import useRobotoContext from "./hooks/useRobotoContext";
import { ControlMode } from "./components/ControlMode";

export default function App() {
  const {
    konamiActivated,
    addToSequence,
    streamFrame,
    socket,
    setStreamFrame,
    setCoordinates,
    setDirection,
    setHeading,
    setOrientation,
    setSpeed
  } = useRobotoContext();

  useEffect(() => {
    if (!socket) return;

    socket.on("receive-video-stream", (data) => {
      setStreamFrame(data);
    });
    socket.on("receive-gps-update", (data) => {
      setCoordinates(data);
    });
    socket.on("receive-gps-speed", (data) => {
      setSpeed(data);
    });
    socket.on("receive-gps-orientation", (data) => {
      setOrientation(data);
    });
    socket.on("receive-direction", (data) => {
      setDirection(data);
    });
    socket.on("receive-heading", (data) => {
      setHeading(data);
    });
  }, [setCoordinates, setDirection, setHeading, setOrientation, setSpeed, setStreamFrame, socket]);

  return (
    <div
      className={`min-h-screen bg-gray-900 text-white p-4 md:p-6 transition-all duration-300 ${
        konamiActivated ? "turbo-mode" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-4 md:space-y-6">
        <Header turboMode={konamiActivated} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          <div className="lg:col-span-8 space-y-4 md:space-y-6">
            <VideoFeed turboMode={konamiActivated} streamFrame={streamFrame} />
            <Controls onKonamiInput={addToSequence} />
          </div>

          <div className="lg:col-span-4">
            <GPSInfo />
            <ControlMode />
          </div>
        </div>
      </div>
    </div>
  );
}
