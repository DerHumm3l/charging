import { Car } from "./car";
import { ChargingState } from "./chargingState";
import { ChargingStats } from "./chargingStats";
import * as Location from "expo-location";

export type Charge = {
  id: string;
  car: Car;
  mileage: number;
  startState: ChargingState;
  address: "unknown" | Location.LocationGeocodedAddress;
  endState?: ChargingState;
  stats?: ChargingStats;
  finished: boolean;
};
