import { create } from 'zustand';
import type { TotalAmountData } from '@/types/TotalAmounts';

interface TotalAmountsStore {
  totalAmounts: TotalAmountData;
  setTotalAmounts: (totalAmounts: TotalAmountData) => void;
}

export const useTotalAmountStore = create<TotalAmountsStore>((set) => ({
  totalAmounts: null,

  setTotalAmounts: (totalAmounts) => set({ totalAmounts }),
}));
