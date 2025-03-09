import { create as _create } from "zustand";
import type { StateCreator } from "zustand";

const storeResetFns = new Set<() => void>();

export const resetStores = () => {
  storeResetFns.forEach((resetFn) => {
    resetFn();
  });
};

export const createWithReset = (<T>() => {
  return (stateCreator: StateCreator<T>) => {
    const store = _create(stateCreator);
    const initialState = store.getState();
    storeResetFns.add(() => {
      store.setState(initialState, true);
    });
    return store;
  };
}) as typeof _create;
