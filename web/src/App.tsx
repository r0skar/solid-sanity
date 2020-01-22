import { lazy } from 'solid-js'

const AppMain = lazy(() => import('./components/AppMain').then(r => ({ default: r.AppMain })))
const AppHeader = lazy(() => import('./components/AppHeader').then(r => ({ default: r.AppHeader })))
const AppFooter = lazy(() => import('./components/AppFooter').then(r => ({ default: r.AppFooter })))

export const App: Solid.FC = () => {
  return (
    <>
      <AppHeader />
      <AppMain />
      <AppFooter />
    </>
  )
}
