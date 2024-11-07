import {
  Navigation,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Hand,
} from "lucide-react";
import useRobotoContext from '../hooks/useRobotoContext';
import { MoveCommand } from "../types/MoveCommand";

interface ControlsProps {
  speed: number;
  onSpeedChange: (value: number) => void;
  onKonamiInput?: (input: string) => void;
}

export const Controls = ({ speed, onSpeedChange, onKonamiInput }: ControlsProps) => {
  const { socket } = useRobotoContext();
  const handleButtonPress = (command: MoveCommand) => {
    onKonamiInput?.(command);

    if (!socket) return;
    socket.emit('move', command);
  };

  const handleSpeedButton = (type: "plus" | "minus") => {
    const newSpeed = type === "plus" ? speed + 10 : speed - 10;

    // Actualizar el estado de speed
    onSpeedChange(newSpeed);

    if (type === "plus") {
      onKonamiInput?.("KeyB");
    } else {
      onKonamiInput?.("KeyA");
    }

    if (!socket) return;
    // Emitir el nuevo valor de speed directamente
    socket.emit('speed', newSpeed);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <Navigation className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
        <h2 className="text-lg md:text-xl font-semibold">Movement Controls</h2>
      </div>

      <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-[240px] mx-auto">
        <div></div>

        <button
          onClick={() => handleButtonPress(MoveCommand.Forward)}
          className="bg-gray-700 hover:bg-gray-600 p-3 md:p-4 rounded-lg transition-colors active:bg-gray-500 touch-manipulation"
        >
          <ChevronUp className="w-6 h-6 md:w-8 md:h-8 mx-auto" />
        </button>

        <div></div>
        <button
          onClick={() => handleButtonPress(MoveCommand.TurnLeft)}
          className="bg-gray-700 hover:bg-gray-600 p-3 md:p-4 rounded-lg transition-colors active:bg-gray-500 touch-manipulation"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 mx-auto" />
        </button>
        <button
          onClick={() => handleButtonPress(MoveCommand.Stop)}
          className="bg-gray-700 hover:bg-gray-600 p-3 md:p-4 rounded-lg transition-colors active:bg-gray-500 touch-manipulation"
        >
          <Hand className="w-6 h-6 md:w-8 md:h-8 mx-auto" />
        </button>

        <button
          onClick={() => handleButtonPress(MoveCommand.TurnRight)}
          className="bg-gray-700 hover:bg-gray-600 p-3 md:p-4 rounded-lg transition-colors active:bg-gray-500 touch-manipulation"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 mx-auto" />
        </button>
        <div></div>
        <button
          onClick={() => handleButtonPress(MoveCommand.Backward)}
          className="bg-gray-700 hover:bg-gray-600 p-3 md:p-4 rounded-lg transition-colors active:bg-gray-500 touch-manipulation"
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 mx-auto" />
        </button>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium mb-2">
          Speed Control: {speed}%
        </label>
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleSpeedButton("minus")}
            className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg active:bg-gray-500 touch-manipulation"
          >
            <Minus className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <div className="flex-1 bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-400 rounded-full h-2 transition-all"
              style={{ width: `${speed}%` }}
            ></div>
          </div>
          <button
            onClick={() => handleSpeedButton("plus")}
            className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg active:bg-gray-500 touch-manipulation"
          >
            <Plus className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
