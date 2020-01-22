import { createContext, useContext } from 'solid-js'
import * as Common from './common'
import * as Router from './router'

type StoreContext = {
  common: Common.Module
  router: Router.Module
}

const Context = createContext<StoreContext>()

export const Provider: Solid.FC = props => {
  const common = Common.createModule()
  const router = Router.createModule()
  const store = { common, router }

  return <Context.Provider value={store}>{props.children}</Context.Provider>
}

type S = StoreContext
type K = keyof StoreContext

/* eslint-disable prettier/prettier */
export function useStore<T extends K>(n: T): [S[T]]
export function useStore<T extends K, T1 extends K>(n: T, n1: T1): [S[T], S[T1]]
export function useStore<T extends K, T1 extends K, T2 extends K>(n: T, n1: T1, n2: T2): [S[T], S[T1], S[T2]]
export function useStore<T extends K, T1 extends K, T2 extends K, T3 extends K>(n: T, n1: T1, n2: T2, n3: T3): [S[T], S[T1], S[T2], S[T3]]
export function useStore<T extends K, T1 extends K, T2 extends K, T3 extends K, T4 extends K>(n: T, n1: T1, n2: T2, n3: T3, n4: T4): [S[T], S[T1], S[T2], S[T3], S[T4]]
export function useStore<T extends K, T1 extends K, T2 extends K, T3 extends K, T4 extends K, T5 extends K>(n: T, n1: T1, n2: T2, n3: T3, n4: T4, n5: T5): [S[T], S[T1], S[T2], S[T3], S[T4], S[T5]]
/* eslint-enable prettier/prettier */

export function useStore(...modules: K[]) {
  const store = useContext(Context)
  return modules.map(m => m && store[m])
}
