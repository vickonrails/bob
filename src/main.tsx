import { RootRoute, Route, Router, RouterProvider } from '@tanstack/react-router'
import React from 'react'
import ReactDOM from 'react-dom/client'

import Builder from './pages/builder.tsx'
import Index from './pages/index.tsx'
import Root from './pages/root.tsx'
import { TemplateMature } from './pages/templates/mature.tsx'
import { TemplatePlain } from './pages/templates/plain.tsx'

import './index.css'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootRoute = new RootRoute({
  component: Root
})

const builderRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'builder',
  component: Builder
})

const templatesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'templates'
})

const templateListRoute = new Route({
  path: '/',
  getParentRoute: () => templatesRoute,
})

const plainTemplateRoute = new Route({
  path: 'plain',
  getParentRoute: () => templatesRoute,
  component: TemplatePlain
})

const matureTemplateRoute = new Route({
  path: 'mature',
  getParentRoute: () => templatesRoute,
  component: TemplateMature
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  builderRoute,
  templatesRoute.addChildren([templateListRoute, plainTemplateRoute, matureTemplateRoute])
])

const router = new Router({ routeTree })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
