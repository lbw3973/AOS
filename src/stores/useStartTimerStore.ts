import { create } from "zustand";

interface IStartTimerStore {
  isTimerRunning: boolean;
  setIsTimerRunning: () => void;
  resetIsTimerRunning: () => void;
}

const startTimerStore = create<IStartTimerStore>(set => ({
  isTimerRunning: false,
  setIsTimerRunning: () => set({ isTimerRunning: true }),
  resetIsTimerRunning: () => set({ isTimerRunning: false }),
}));

export const useStartTimerStore = () => startTimerStore(state => state);
