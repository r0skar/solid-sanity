import { render } from 'solid-js/dom'
import { forceRenderStyles } from 'typestyle'
import { createGlobalStyles } from './design'
import { App } from './App'

const anchor = document.querySelector('#app')

if (anchor) {
  createGlobalStyles()
  forceRenderStyles()
  render(() => <App />, anchor)
}
