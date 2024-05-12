"use client"

import CounterAtom from "@/component/counter/counter-atom";
import {CounterViewModel} from "@/lib/counter/counter-viewmodel";
import ScopeAtom from "@/component/scope/scope-atom";
import CounterMolecule from "@/component/counter/counter-molecule";

export default function MultiplePage() {
  const viewModelA = CounterViewModel()
  const viewModelB = CounterViewModel()

  return (
    <div>
      <ScopeAtom state={viewModelA}><CounterAtom /></ScopeAtom>
      <ScopeAtom state={viewModelA}><CounterAtom /></ScopeAtom>
      <ScopeAtom state={viewModelA}><CounterAtom /></ScopeAtom>
      <ScopeAtom state={viewModelA}><CounterAtom /></ScopeAtom>
      <ScopeAtom state={viewModelA}><CounterAtom /></ScopeAtom>
      <ScopeAtom state={viewModelB}><CounterAtom /></ScopeAtom>
      <ScopeAtom state={viewModelB}><CounterAtom /></ScopeAtom>
      <ScopeAtom state={viewModelB}><CounterAtom /></ScopeAtom>
      <ScopeAtom state={viewModelB}><CounterAtom /></ScopeAtom>
      <ScopeAtom state={viewModelB}><CounterAtom /></ScopeAtom>
    </div>
  )
}