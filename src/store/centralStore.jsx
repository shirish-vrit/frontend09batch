import { create } from "zustand";

export const useCart = create((set) => ({
  itemsInCart: 0,
  increaseCartItem: () =>
    set((state) => ({ itemsInCart: state.itemsInCart + 1 })),
}));
