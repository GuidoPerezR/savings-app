import { create } from 'zustand';
import type { CategoryId } from '@/types/Categories';

interface CategoriesStore {
  selectedCategoryId: CategoryId;
  setSelectedCategoryId: (id: CategoryId) => void;
  resetSelectedCategoryId: () => void;
}

export const useCategoriesStore = create<CategoriesStore>((set) => ({
  selectedCategoryId: null,
  setSelectedCategoryId: (id: CategoryId) => set({ selectedCategoryId: id }),

  resetSelectedCategoryId: () => set({ selectedCategoryId: null }),
}));
