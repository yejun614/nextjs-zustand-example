import {createContext, ReactNode, useContext, useRef} from "react";
import {StoreApi, useStore} from "zustand";

export const ScopeContext = createContext<StoreApi<any> | null>(null)

export default function ScopeAtom(props: {
  state: StoreApi<any>
  children: ReactNode
}) {
  const ref = useRef<StoreApi<any>>()
  if (!ref.current) {
    ref.current = props.state
  }

  return (
    <ScopeContext.Provider value={ref.current}>
      {props.children}
    </ScopeContext.Provider>
  )
}

export function useScope<T,>(selector: (store: any) => T = (state) => state): T {
  const context = useContext(ScopeContext)
  if (!context) {
    throw new Error("Missing Store Provider")
  }
  return useStore(context, selector)
}
