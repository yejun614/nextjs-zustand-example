import ScopeAtom from "@/component/scope/scope-atom";
import {CounterViewModel} from "@/lib/counter/counter-viewmodel";
import CounterAtom from "@/component/counter/counter-atom";

export default function CounterMolecule() {
  const viewModel = CounterViewModel()

  return (
    <ScopeAtom state={viewModel}>
      <CounterAtom />
    </ScopeAtom>
  )
}