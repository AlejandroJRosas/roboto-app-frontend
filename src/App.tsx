import React, { useState } from 'react';
import { Header } from './components/Header';
import { VideoFeed } from './components/VideoFeed';
import { Controls } from './components/Controls';
import { GPSInfo } from './components/GPSInfo';
import  useKonamiCode from './hooks/useKonamiCode';
import useSockets from './hooks/useSockets';

export default function App() {
  const [speed, setSpeed] = useState(50);
  const [coordinates, setCoordinates] = useState({
    latitude: '40.7128° N',
    longitude: '74.0060° W',
    altitude: '10m',
    heading: '45°',
  });
  const [streamFrame, setStreamFrame] = useState(null);
  const { konamiActivated, addToSequence } = useKonamiCode();
  const socket = useSockets();
  socket.on("receive-video-stream",(data) => {
    setStreamFrame(data);
  })
  socket.on("receive-gps-update",(data) => {
    setCoordinates((prevData) => {
      return ({
        ...prevData,
        latitude: data.latitude + "° N",
        longitude: data.longitude + "° W",
      });
    })
  })

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
            <GPSInfo coordinates={coordinates} />
          </div>
        </div>
      </div>
    </div>
  );
}