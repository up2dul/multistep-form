import create from 'zustand';

export const useStepStore = create((set) => ({
  step: 0,
  setPrevStep: () => set((state) => ({ step: state.step - 1 })),
  setNextStep: () => set((state) => ({ step: state.step + 1 }))
}));
