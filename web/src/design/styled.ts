import { style, types } from 'typestyle'

type Values = types.TLength | boolean | undefined
type Styles<P = {}> = types.NestedCSSProperties | Record<string, Values | ((p: P) => Values)>

export function css(...args: Styles[]): () => string
export function css<P>(...args: Styles<P>[]): (p: P) => string
export function css<P>(...args: Styles<P>[]) {
  return (props = {} as P) => {
    const styles = args.map(items =>
      Object.entries(items).reduce(
        (prev, [key, value]) => ({
          ...prev,
          [key]: typeof value === 'function' ? value(props) : value
        }),
        {}
      )
    )

    return style(...styles)
  }
}
