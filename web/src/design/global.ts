/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import { cssRule, cssRaw } from 'typestyle'
import destyle from '!!raw-loader!@r0skar/destyle.css/destyle.css'
import * as theme from './theme'

export const createGlobalStyles = () => {
  cssRaw(destyle)

  cssRule('*::selection', {
    backgroundColor: theme.colors.text.toString(),
    color: theme.colors.bg.toString()
  })

  cssRule('html', {
    backgroundColor: theme.colors.bg.toString(),
    color: theme.colors.text.toString(),
    height: '100%',
    fontFamily: theme.fontFamily.sans,
    fontSize: theme.baseTextSize,
    overflowY: 'scroll',
    overflowX: 'hidden'
  })

  cssRule('body', {
    height: '100%',
    fontSize: '1rem',
    lineHeight: theme.baseline,
    letterSpacing: theme.tracking.normal
  })

  cssRule('#app', {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  })
}
