import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { VideoFeed } from './components/VideoFeed';
import { Controls } from './components/Controls';
import { GPSInfo } from './components/GPSInfo';
import useRobotoContext from './hooks/useRobotoContext';

export default function App() {
  const [speed, setSpeed] = useState(50);
  const { konamiActivated, addToSequence, streamFrame, socket, setStreamFrame, setCoordinates } = useRobotoContext();

  useEffect(() => {
    if (!socket) return;

    socket.on("receive-video-stream", (data) => {
      setStreamFrame(data);
    })
    socket.on("receive-gps-update", (data) => {
      setCoordinates(data)
    })
  }, [setCoordinates, setStreamFrame, socket]);

  const handleSpeedChange = (value: number) => {
    setSpeed(Math.min(Math.max(0, value), 100));
  };

  return (
    <div className={`min-h-screen bg-gray-900 text-white p-4 md:p-6 transition-all duration-300 ${
      konamiActivated ? 'turbo-mode' : ''
    }`}>
      <div className="max-w-7xl mx-auto space-y-4 md:space-y-6">
        <Header turboMode={konamiActivated} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          <div className="lg:col-span-8 space-y-4 md:space-y-6">
            <VideoFeed turboMode={konamiActivated} streamFrame={streamFrame}/>
            <Controls 
              speed={konamiActivated ? 100 : speed} 
              onSpeedChange={handleSpeedChange}
              onKonamiInput={addToSequence}
            />
          </div>

          <div className="lg:col-span-4">
            <GPSInfo />
          </div>
        </div>
      </div>
    </div>
  );
}