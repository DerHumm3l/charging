import {
  currentChargeActionsSelector,
  currentChargeSelector,
  useAppStore,
} from "./appStore";

export const useCurrentCharge = () => useAppStore(currentChargeSelector());

export const useCurrentChargeActions = () =>
  useAppStore(currentChargeActionsSelector());
