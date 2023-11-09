import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "store",
  state: () => {
    return {
      isMobileMenuOpen: false,
    };
  },
  actions: {
    toggleIsMobileMenuOpen() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
  },
  getters: {
    getIsMobileMenuOpen: (state) => state.isMobileMenuOpen,
  },
});
