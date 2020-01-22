export enum Route {
  Home = 'home',
  Imprint = 'imprint',
  NOT_FOUND = 'NOT_FOUND'
}

export type RouteParams = {
  story?: string
}

export type RouteMatch = {
  name: Route
  path: string
  redirect?: string
  params?: RouteParams
}

export const ROUTE_NOT_FOUND: RouteMatch = {
  name: Route.NOT_FOUND,
  path: '/404'
} as const

export const createRoutes = (): RouteMatch[] => [
  { name: Route.Home, path: '/' },
  { name: Route.Imprint, path: '/imprint' }
]
