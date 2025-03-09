import { LocationObject } from "expo-location";
import { createContext, PropsWithChildren } from "react";

type ChargeContext = {
  startChargingLevel?: number;
  mileage?: number;
  location?: LocationObject;
  startTime?: Date;
};

type Props = PropsWithChildren;

export const ChargeContext = createContext<ChargeContext | undefined>(
  undefined
);

export const ChargeProvider = ({ children }: Props) => {
  return <ChargeContext.Provider value={{}}>{children}</ChargeContext.Provider>;
};
