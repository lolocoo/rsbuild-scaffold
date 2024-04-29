import nprogress from 'nprogress'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'nprogress/nprogress.css'
import '@/styles/main.css'
import routes from '@/routes'

nprogress.configure({ showSpinner: false })

const App = () => {
  const router = createBrowserRouter(routes)
  return <RouterProvider router={router} />
}

export default App
