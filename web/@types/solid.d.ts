import * as SolidDOM from 'solid-js/types/dom'
import 'babel-plugin-jsx-dom-expressions/types'

declare global {
  const For: typeof SolidDOM.For
  const Show: typeof SolidDOM.Show
  const Match: typeof SolidDOM.Match
  const Portal: typeof SolidDOM.Portal
  const Switch: typeof SolidDOM.Switch
  const Suspense: typeof SolidDOM.Suspense
  const SuspenseList: typeof SolidDOM.SuspenseList

  namespace Solid {
    export type FCProps<P = {}> = P & { children?: unknown }
    export type FC<P = {}> = (props: FCProps<P>) => JSX.Element
  }
}
