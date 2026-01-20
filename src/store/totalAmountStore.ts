import { create } from 'zustand';

export type TotalAmountStore = {
  id: number;
  created_at: Date;
  current_balance: number;
  total_earnings: number;
  total_spendings: number;
  total_invested: number;
  total_savings: number;
  user_id: string;
} | null;

interface TotalAmountsStore {
  totalAmounts: TotalAmountStore;
  setTotalAmounts: (totalAmounts: TotalAmountStore) => void;
}

export const useTotalAmountStore = create<TotalAmountsStore>((set) => ({
  totalAmounts: null,

  setTotalAmounts: (totalAmounts) => set({ totalAmounts }),
}));
