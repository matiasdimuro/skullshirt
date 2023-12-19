import { create } from 'zustand'

export const useAppStore = create((set) => ({
    isNavbarHidden: true,
    setIsNavbarHidden: (isNavbarHidden) => set({ isNavbarHidden })
}))