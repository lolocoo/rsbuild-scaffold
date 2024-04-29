import React, { ReactNode, ComponentType } from 'react'

export interface RouteConfig {
  key: string
  index?: boolean | undefined
  name: string
  path?: string
  element?: ReactNode
  ErrorBoundary?: ComponentType | null
  component: string | React.Component | ComponentType
  activeMenu?: string
  errorElement?: ReactNode | null
  hideInMenu?: boolean
  hideInBreadcrumb?: boolean
  icon?: ReactNode
  parentKeys?: string[]
  isTemplate?: boolean
  children?: RouteConfig[]
}

const routesConfig: RouteConfig[] = [
  {
    name: '首页',
    path: '/',
    key: 'index',
    isTemplate: true,
    component: 'components/layouts',
    children: [
      {
        name: 'home',
        key: 'home',
        isTemplate: true,
        component: 'components/layouts/columns',
        children: [
          {
            key: 'sub',
            name: 'sub',
            index: true,
            component: () => <div>Main Content Column</div>,
          },
        ],
      },
      {
        name: 'are',
        path: '/thank/are',
        key: 'are',
        component: () => <div>are</div>,
      },
    ],
  },
  // {
  //   path: '*',
  //   key: 'page.not.found',
  //   name: 'Page Not Found',
  //   component: () => <Navigate to="/" replace />,
  //   hideInMenu: true,
  // },
]

export default routesConfig
