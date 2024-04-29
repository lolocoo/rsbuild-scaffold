import { useEffect } from 'react'

import nprogress from 'nprogress'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Outlet, useNavigation } from 'react-router-dom'

import ErrorBoundary from '@/components/error-boundary'
import config from '@/config'

function Home() {
  const navigation = useNavigation()

  useEffect(() => {
    if (navigation.state === 'loading') {
      nprogress.start()
      return
    }
    nprogress.done()
  }, [navigation.state])

  return (
    <HelmetProvider>
      <Helmet>
        <title>{config.appName}</title>
      </Helmet>
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default Home
