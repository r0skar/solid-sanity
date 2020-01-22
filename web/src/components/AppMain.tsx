import { lazy } from 'solid-js'
import { useStore } from '../store'
import { Route } from '../routing'
import { css } from '../design'

const Home = lazy(() => import('../views/Home').then(r => ({ default: r.Home })))
const NotFound = lazy(() => import('../views/NotFound').then(r => ({ default: r.NotFound })))

const main = css({
  flex: 1
})

export const AppMain: Solid.FC = () => {
  const [Router] = useStore('router')

  return (
    <main className={main()}>
      {/* eslint-disable prettier/prettier */}
      <Switch>
        <Match when={Router.matches(Route.Home)}><><Home /></></Match>
        <Match when={Router.matches(Route.NOT_FOUND)}><><NotFound /></></Match>
      </Switch>
      {/* eslint-enable prettier/prettier */}
    </main>
  )
}
