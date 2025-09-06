import { create } from "zustand";

interface GeneralStore {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const useGeneralStore = create<GeneralStore>((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));
