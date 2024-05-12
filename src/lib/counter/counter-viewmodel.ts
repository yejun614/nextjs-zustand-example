import {create, createStore} from "zustand";

export interface CounterInterface {
  value: number,
  increase: () => void,
  decrease: () => void,
}

export function CounterViewModel() {
  return createStore<CounterInterface>((set) => ({
    value: 0,
    increase: () => set((state) => ({ value: state.value + 1 })),
    decrease: () => set((state) => ({ value: state.value - 1 })),
  }))
}
