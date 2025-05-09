import { Charge } from "~/types/charge";
import { Settings } from "~/types/settings";
import { createWithReset } from "./reset";
import { ChargingState } from "~/types/chargingState";

export type AppStore = {
  charges: Charge[];
  currentCharge: Charge | undefined;
  settings: Settings;
  updateSettings: (settings: Settings) => void;
  startCharge: (charge: Charge) => void;
  finishCharge: (endState: ChargingState) => void;
};

export const useAppStore = createWithReset<AppStore>()((set) => ({
  charges: [],
  currentCharge: undefined,
  settings: { batteryCapacity: 0 },
  finishCharge: (endState: ChargingState) =>
    set((prev) => ({
      currentCharge: undefined,
      charges: [
        ...prev.charges,
        { ...prev.currentCharge!, endState, finished: true },
      ],
    })),
  startCharge: (charge) =>
    set({
      currentCharge: charge,
    }),
  updateSettings: (updatedSettings) =>
    set({
      settings: updatedSettings,
    }),
}));
