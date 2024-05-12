"use client"

import {create} from "zustand";

interface BearState {
  bears: number,
  increase: (by: number) => void
}

const useStore = create<BearState>(set => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
}))

export default function SimplePage() {
  const { bears, increase } = useStore()

  return (
    <div>
      <label>{bears}</label>
      <button onClick={() => {increase(1)}}>click</button>
    </div>
  )
}