import { render } from 'solid-js/dom'
import { forceRenderStyles } from 'typestyle'
import { createGlobalStyles } from './design'

const anchor = document.querySelector('#app')
const Root = () => <div>App</div>

if (anchor) {
  createGlobalStyles()
  forceRenderStyles()
  render(Root, anchor)
}
