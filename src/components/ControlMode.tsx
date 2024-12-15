import { Navigation } from "lucide-react";
import useRobotoContext from "../hooks/useRobotoContext";
import { MoveCommand } from "../types/MoveCommand";

interface ControlsProps {
  onKonamiInput?: (input: string) => void;
}

export const ControlMode = ({ onKonamiInput }: ControlsProps) => {
  const { socket } = useRobotoContext();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <Navigation className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
        <h2 className="text-lg md:text-xl font-semibold">Movement Controls</h2>
      </div>

      <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-[240px] mx-auto">
        <div className="flex gap-2">
          <input
            type="radio"
            name="control-mode"
            id="controller-mode"
            onChange={handleInputChange}
          ></input>
          <label>Control</label>
        </div>

        <div className="flex gap-2">
          <input
            type="radio"
            name="control-mode"
            id="map-mode"
            onChange={handleInputChange}
          ></input>
          <label>Mapa</label>
        </div>

        <div className="flex gap-2">
          <input
            type="radio"
            name="control-mode"
            id="dog-mode"
            onChange={handleInputChange}
          ></input>
          <label>Perro</label>
        </div>
      </div>
    </div>
  );
};
