import { Path as PathParser } from 'path-parser'
import { createSignal, createEffect, onCleanup } from 'solid-js'
import { createBrowserHistory, Location } from 'history'
import { ROUTE_NOT_FOUND, createRoutes, Route, RouteMatch, RouteParams } from '../routing'

// eslint-disable-next-line @typescript-eslint/no-use-before-define
export type Module = ReturnType<typeof createModule>

export enum Status {
  ROUTED = 'ROUTED',
  ROUTING = 'ROUTING'
}

const routes = createRoutes()
const history = createBrowserHistory<RouteParams>()
const EMPTY_MATCH = {} as RouteMatch

const parsePath = (p1: string, p2: string) => {
  return PathParser.createPath(p1).test(p2)
}

const isAnchorNode = (el: EventTarget) => {
  return (el as HTMLElement).localName === 'a'
}

const findAnchorNode = (ev: MouseEvent) => {
  return ev.target && isAnchorNode(ev.target)
    ? (ev.target as HTMLAnchorElement)
    : (ev.composedPath() as HTMLAnchorElement[]).find(isAnchorNode)
}

const resolveRoute = ({ pathname }: Location<RouteParams>): RouteMatch | undefined => {
  const route = routes.find(r => !!parsePath(r.path, pathname))
  const parsedParams = route ? parsePath(route.path, pathname) : undefined
  return route ? { ...route, path: pathname, params: { ...route.params, ...parsedParams } } : undefined
}

const onNavEvent = (ev: MouseEvent) => {
  const anchor = findAnchorNode(ev)
  const href = anchor?.getAttribute('href') || anchor?.getAttribute('xlink:href')
  const isModifiedClick = ev.metaKey || ev.altKey || ev.ctrlKey || ev.shiftKey

  if (ev.defaultPrevented || isModifiedClick || !href || href.startsWith('#')) {
    return
  }

  ev.preventDefault()
  ev.stopPropagation()

  if (href.startsWith('/') || href.startsWith(window.location.origin)) {
    history.push(href)
  } else {
    window.open(href, '_blank', 'noopener')
  }
}

export const createModule = () => {
  const [status, setStatus] = createSignal(Status.ROUTING)
  const [route, setRoute] = createSignal(EMPTY_MATCH)
  const [location, setLocation] = createSignal(history.location)
  const stopRouting = history.listen(setLocation)

  window.history.scrollRestoration = 'manual'
  window.addEventListener('click', onNavEvent)

  createEffect(() => {
    const { redirect, ...next } = resolveRoute(location()) || ROUTE_NOT_FOUND

    setStatus(Status.ROUTING)

    if (redirect) {
      history.replace(redirect)
    } else {
      setRoute(next)
      setTimeout(setStatus, 0, Status.ROUTED)
    }
  })

  onCleanup(() => {
    stopRouting()
    window.removeEventListener('click', onNavEvent)
  })

  return {
    route,
    status,
    matches: (name: Route) => name === route().name
  }
}
