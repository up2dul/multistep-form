import create from 'zustand';

export const useStepStore = create((set) => ({
  step: 0,
  setNextStep: () => set((state) => ({ step: state.step + 1 })),
  setPrevStep: () => set((state) => ({ step: state.step - 1 }))
}));
