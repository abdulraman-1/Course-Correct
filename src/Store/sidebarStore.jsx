import { create } from "zustand";

const useSidebar = create((set) => ({
  sidebarOpen: true, // Initial state
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })), // Toggles the state
  reset: () => set({ sidebarOpen: true }) // Resets `sidebarOpen` to false
}));

export default useSidebar;
