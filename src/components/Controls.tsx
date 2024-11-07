import {
  Navigation,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Hand,
} from "lucide-react";
import useRobotoContext from '../hooks/useRobotoContext';
import { MoveCommand } from "../types/MoveCommand";

interface ControlsProps {
  onKonamiInput?: (input: string) => void;
}

export const Controls = ({ onKonamiInput }: ControlsProps) => {
  const { socket } = useRobotoContext();
  const handleButtonPress = (command: MoveCommand) => {
    onKonamiInput?.(command);

    if (!socket) return;
    socket.emit('move', command);
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
    </div>
  );
};
