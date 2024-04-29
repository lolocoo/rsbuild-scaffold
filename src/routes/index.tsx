import { lazy, Suspense } from 'react'

import forEach from 'ramda/src/forEach'
import is from 'ramda/src/is'
import { RouteObject } from 'react-router-dom'

import config, { RouteConfig } from './config'

const traverse = (routes: RouteConfig[], arr: RouteObject[]) => {
  const fn = ({
    index = undefined,
    errorElement = null,
    path,
    ErrorBoundary = null,
    component,
    children,
  }: RouteConfig) => {
    const Element = (
      is(String, component) ? lazy(() => import(`@/${component}`)) : component
    ) as React.ComponentType

    const route: RouteObject = {
      index,
      path,
      errorElement,
      ErrorBoundary,
      element: (
        <Suspense fallback={null}>
          <Element />
        </Suspense>
      ),
    }

    if (!index) {
      delete route.index
    } else {
      delete route.path
    }

    if (children?.length) {
      route.children = []
      traverse(children, route.children)
    }

    arr.push(route)
  }

  forEach(fn, routes)
}

const buildRoutes = (routeConfig: RouteConfig[]) => {
  const items: RouteObject[] = []
  traverse(routeConfig, items)
  return items
}

const routes = buildRoutes(config)

export default routes
