import { create } from "zustand";

const useHamburger = create((set) => ({
  hamburgerOpen: false, // Initial state
  toggleHamburger: () => set((state) => ({ hamburgerOpen: !state.hamburgerOpen })), // Correctly toggles the state
}));

export default useHamburger;
