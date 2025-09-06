import { create } from "zustand";

interface authStore {
  authToken: string;
  setAuthToken: (token: string) => void;
}

export const useAuthStore = create<authStore>((set) => ({
  authToken: "",
  setAuthToken: (token: string) => set((state) => ({ authToken: token })),
}));
