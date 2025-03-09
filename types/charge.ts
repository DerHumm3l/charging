import { Car } from "./car";
import { ChargingState } from "./chargingState";
import { ChargingStats } from "./chargingStats";

export type Charge = {
  id: string;
  car: Car;
  mileage: number;
  location: string;
  startState: ChargingState;
  endState?: ChargingState;
  stats?: ChargingStats;
  finished: boolean;
};
