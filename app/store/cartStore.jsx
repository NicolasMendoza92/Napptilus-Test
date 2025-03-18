import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      items: [],
      isLoading: true,

      addItem: (item) => {
        set((state) => ({
          items: [...state.items, { ...item, quantity: 1, cartId: crypto.randomUUID() }],
          isLoading: false,
        }));
      },

      removeItem: (cartId) => {
        set((state) => ({
          items: state.items.filter((item) => item.cartId !== cartId),
        }));
      },
      
      clearCart: () => {
        set({ items: [], isLoading: false });
      },
    }),
    {
      name: "cart-store",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isLoading = false; 
        }
      },
    }
  )
);