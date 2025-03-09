import { Charge } from "~/types/charge";
import { Settings } from "~/types/settings";
import { createWithReset } from "./reset";

export type AppStore = {
  currentCharge: Charge | undefined;
  settings: Settings;
  updateSettings: (settings: Settings) => void;
  startCharge: (charge: Charge) => void;
  finishCharge: () => void;
};

export const useAppStore = createWithReset<AppStore>()((set) => ({
  currentCharge: undefined,
  settings: { batteryCapacity: 0 },
  finishCharge: () => set({ currentCharge: undefined }),
  startCharge: (charge) =>
    set({
      currentCharge: charge,
    }),
  updateSettings: (updatedSettings) =>
    set({
      settings: updatedSettings,
    }),
}));
