import { create } from 'zustand';

interface CategoryState {
    selectedCategory: string;
    setCategory: (id: string) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
    selectedCategory: 'todos', // Por defecto mostramos todo
    setCategory: (id) => set({ selectedCategory: id }),
}));