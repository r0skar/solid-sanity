import { render } from 'solid-js/dom'
import { forceRenderStyles } from 'typestyle'
import { createGlobalStyles } from './design'
import { Provider } from './store'
import { App } from './App'

const anchor = document.querySelector('#app')

const createAppRoot = () => (
  <Provider>
    <App />
  </Provider>
)

if (anchor) {
  createGlobalStyles()
  forceRenderStyles()
  render(createAppRoot, anchor)
}
