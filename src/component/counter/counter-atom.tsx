"use client"

import {useScope} from "@/component/scope/scope-atom";
import {CounterInterface} from "@/lib/counter/counter-viewmodel";

export default function CounterAtom() {
  const viewModel = useScope<CounterInterface>()

  return (
    <div>
      <button onClick={viewModel.decrease}>-</button>
      <label>{viewModel.value}</label>
      <button onClick={viewModel.increase}>+</button>
    </div>
  )
}
