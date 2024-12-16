import { Brain } from "lucide-react";
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

      <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-[240px] mx-auto">
        <div className="flex gap-2">
          <input
            type="radio"
            name="control-mode"
            id="controller-mode"
            onChange={() => {
              handleButtonPress(MovementMode.CONTROL);
            }}
            value={MovementMode.CONTROL}
            checked={robotoStatus.movementMode === MovementMode.CONTROL}
          ></input>
          <label>Control</label>
        </div>

        <div className="flex gap-2">
          <input
            type="radio"
            name="control-mode"
            id="map-mode"
            onChange={() => {
              handleButtonPress(MovementMode.MAP);
            }}
            value={MovementMode.MAP}
            checked={robotoStatus.movementMode === MovementMode.MAP}
          ></input>
          <label>Mapa</label>
        </div>

        <div className="flex gap-2">
          <input
            type="radio"
            name="control-mode"
            id="dog-mode"
            onChange={() => {
              handleButtonPress(MovementMode.DOG);
            }}
            checked={robotoStatus.movementMode === MovementMode.DOG}
            value={MovementMode.DOG}
          ></input>
          <label>Perro</label>
        </div>
      </div>
    </div>
  );
};
