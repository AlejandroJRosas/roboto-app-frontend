import { Brain, MapPinned, Gamepad, Waypoints, Dog } from "lucide-react";
import useRobotoContext from "../hooks/useRobotoContext";
import { MovementMode } from '../hooks/useRobotoStatus';

export const ControlMode = () => {
  const { socket, robotoStatus } = useRobotoContext();
  const handleButtonPress = (command: MovementMode) => {
    if (!socket) return;
    socket.emit('change-mode', command);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
        <h2 className="text-lg md:text-xl font-semibold">Movement mode</h2>
        <div>
          <span className="text-xs md:text-sm text-gray-500">
            {robotoStatus.movementMode}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 md:gap-4 max-w-[360px] mx-auto">
        <div
          className={`flex flex-col items-center gap-2 p-2 rounded-lg cursor-pointer ${
            robotoStatus.movementMode === MovementMode.CONTROL ? 'bg-blue-500' : 'bg-gray-700'
          }`}
          onClick={() => handleButtonPress(MovementMode.CONTROL)}
        >
          <Gamepad className="w-6 h-6 text-white" />
          <span className="text-white">Control</span>
        </div>

        <div
          className={`flex flex-col items-center gap-2 p-2 rounded-lg cursor-pointer ${
            robotoStatus.movementMode === MovementMode.MAP ? 'bg-blue-500' : 'bg-gray-700'
          }`}
          onClick={() => handleButtonPress(MovementMode.MAP)}
        >
          <MapPinned className="w-6 h-6 text-white" />
          <span className="text-white">Mapa</span>
        </div>

        <div
          className={`flex flex-col items-center gap-2 p-2 rounded-lg cursor-pointer ${
            robotoStatus.movementMode === MovementMode.DOG ? 'bg-blue-500' : 'bg-gray-700'
          }`}
          onClick={() => handleButtonPress(MovementMode.DOG)}
        >
          <Dog className="w-6 h-6 text-white" />
          <span className="text-white">Perro</span>
        </div>

        {/* WIP */}
        <div
          className={`flex flex-col items-center gap-2 p-2 rounded-lg cursor-pointer ${
            robotoStatus.movementMode === MovementMode.PATH ? 'bg-blue-500' : 'bg-gray-700'
          }`}
          onClick={() => handleButtonPress(MovementMode.PATH)}
        >
          <Waypoints className="w-6 h-6 text-white" />
          <span className="text-white">Ruta</span>
        </div>

      </div>
    </div>
  );
};
