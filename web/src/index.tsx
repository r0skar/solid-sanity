import { render } from 'solid-js/dom'

const anchor = document.querySelector('#app')
const Root = () => <div>App</div>

if (anchor) {
  render(Root, anchor)
}
