import type { StateCreator } from "zustand";
import { enterFullScreen, exitFullScreen } from "~/utils";

export interface SystemSlice {
  dark: boolean;
  volume: number;
  brightness: number;
  wifi: boolean;
  bluetooth: boolean;
  airdrop: boolean;
  fullscreen: boolean;
  toggleDark: () => void;
  toggleWIFI: () => void;
  toggleBluetooth: () => void;
  toggleAirdrop: () => void;
  toggleFullScreen: (v: boolean) => void;
  setVolume: (v: number) => void;
  setBrightness: (v: number) => void;
}

export const createSystemSlice: StateCreator<SystemSlice> = (set) => ({
  dark: localStorage.getItem("dark") ? true : false,
  volume: parseInt(localStorage.getItem("volume") || "100"),
  brightness: parseInt(localStorage.getItem("brightness") || "80"),
  wifi: localStorage.getItem("wifi") !== "false" ? true : false,
  bluetooth: localStorage.getItem("bluetooth") !== "false" ? true : false,
  airdrop: localStorage.getItem("airdrop") !== "false" ? true : false,
  fullscreen: false,
  toggleDark: () =>
    set((state) => {
      if (!state.dark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("dark", "true");
      }
      else {
        document.documentElement.classList.remove("dark");
        localStorage.removeItem("dark");
      }
      return { dark: !state.dark };
    }),
  toggleWIFI: () => set((state) => {
    if (state.wifi) localStorage.setItem("wifi", "false");
    else localStorage.setItem("wifi", "true");
    return { wifi: !state.wifi }
  }),
  toggleBluetooth: () => set((state) => {
    if (state.bluetooth) localStorage.setItem("bluetooth", "false");
    else localStorage.setItem("bluetooth", "true");
    return { bluetooth: !state.bluetooth }
  }),
  toggleAirdrop: () => set((state) => {
    if (state.airdrop) localStorage.setItem("airdrop", "false");
    else localStorage.setItem("airdrop", "true");
    return { airdrop: !state.airdrop }
  }),
  toggleFullScreen: (v) =>
    set(() => {
      v ? enterFullScreen() : exitFullScreen();
      return { fullscreen: v };
    }),
  setVolume: (v) => set(() => {
    localStorage.setItem("volume", v.toString());
    return { volume: v }
  }),
  setBrightness: (v) => set(() => {
    localStorage.setItem("brightness", v.toString());
    return { brightness: v };
  })
});
