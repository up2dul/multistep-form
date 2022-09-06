import create from 'zustand';

export const useFormStore = create((set) => ({
  firstForm: null,
  secondStep: null,
  thirdStep: null,
  setFirstForm: (data) => set(() => ({ firstForm: data }))
}));
