import { create } from 'zustand';

type Store = {
  count: number;
  AddToCart: () => void;
  Remove: () => void;
};

const useCart = create<Store>((set) => ({
  count: 0,
  AddToCart: () => set((state) => ({ count: state.count + 1 })),
  Remove: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCart;