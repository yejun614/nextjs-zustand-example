"use client"

import {useScope} from "@/component/scope/scope-atom";

export default function CounterAtom() {
  const viewModel = useScope((state) => state)

  return (
    <div>
      <button onClick={viewModel.decrease}>-</button>
      <label>{viewModel.value}</label>
      <button onClick={viewModel.increase}>+</button>
    </div>
  )
}
