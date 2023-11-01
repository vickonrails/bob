import { RootRoute, Route, Router, RouterProvider } from '@tanstack/react-router'
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Builder from './pages/builder.tsx'
import Index from './pages/index.tsx'
import Root from './pages/root.tsx'

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

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index
})

// const builderRootRoute = new Route({
//   getParentRoute: () => rootRoute,
//   path: '/',
//   component: Builder
// })

// const appIndexRoute = new Route({
//   path: '/',
//   getParentRoute: () => appRoute,
//   component: Connections,
// })

const routeTree = rootRoute.addChildren([
  indexRoute,
  builderRoute
])

const router = new Router({ routeTree })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
