import create from 'zustand';

export const useInputStore = create((set) => ({
  inputs: {
    firstStep: null,
    secondStep: null,
    thirdStep: null
  },
  setFirstStep: () => set((state) => console.log(state))
}));
