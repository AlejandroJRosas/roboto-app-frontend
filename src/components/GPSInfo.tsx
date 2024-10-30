import React from 'react';
import { Compass } from 'lucide-react';
import { MapComponent } from './Map';

interface Coordinates {
  latitude: string;
  longitude: string;
  altitude: string;
  heading: string;
}

interface GPSInfoProps {
  coordinates: Coordinates;
}

export const GPSInfo = ({ coordinates }: GPSInfoProps) => {
  // Convert string coordinates to numbers for the map
  const lat = parseFloat(coordinates.latitude.replace('° N', ''));
  const lng = parseFloat(coordinates.longitude.replace('° W', ''));

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <Compass className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
        <h2 className="text-lg md:text-xl font-semibold">GPS Information</h2>
      </div>
      
      <div className="space-y-3 md:space-y-4">
        <MapComponent latitude={lat} longitude={lng} />
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 md:gap-4">
          <div className="bg-gray-700 rounded-lg p-3 md:p-4">
            <div className="text-xs md:text-sm text-gray-400">Latitude</div>
            <div className="text-base md:text-lg font-semibold">{coordinates.latitude}</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3 md:p-4">
            <div className="text-xs md:text-sm text-gray-400">Longitude</div>
            <div className="text-base md:text-lg font-semibold">{coordinates.longitude}</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3 md:p-4">
            <div className="text-xs md:text-sm text-gray-400">Altitude</div>
            <div className="text-base md:text-lg font-semibold">{coordinates.altitude}</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3 md:p-4">
            <div className="text-xs md:text-sm text-gray-400">Heading</div>
            <div className="text-base md:text-lg font-semibold">{coordinates.heading}</div>
          </div>
        </div>
      </div>
    </div>
  );
};