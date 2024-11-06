import { Dispatch, SetStateAction, useMemo, useState } from "react";

export const UCAB_GUAYANA_LOCATION = {
	//Direction UCAB Guayana
	latitude: 8.297190438715472,
	longitude: -62.71175014484465
};

export default function useRobotoLocation(): RobotoLocationHook {
	const [coordinates, setCoordinates] = useState<CoordinatesI | null>(null);
	const [altitudeInMetters] = useState<number | null>(null);
	const [heading, setHeading] = useState<number | null>(null);
	const [direction, setDirection] = useState<Direction | null>(null);

	const robotoLocation = useMemo(() => {
		return ({
			coordinates,
			heading,
			altitudeInMetters,
			direction: direction!
		})			
	},[coordinates, heading, altitudeInMetters, direction]);

	return { robotoLocation, setHeading, setDirection, coordinates, setCoordinates };
}

export enum Direction {
	N = 'N',
	S = 'S',
	E = 'E',
	W = 'W'
};
export interface CoordinatesI {
	latitude: number;
	longitude: number;
};

export interface RobotoLocation {
	coordinates: CoordinatesI | null;
	heading: number | null;
	altitudeInMetters: number | null;
	direction: Direction | null;
}

export interface RobotoLocationHook {
	robotoLocation: RobotoLocation;
	setHeading: Dispatch<SetStateAction<number | null>>;
	setDirection: Dispatch<SetStateAction<Direction | null>>;
	setCoordinates: Dispatch<SetStateAction<CoordinatesI | null>>;
	coordinates: CoordinatesI | null;
}
