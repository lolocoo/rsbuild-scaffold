import { ReactNode } from 'react'

import test from 'ramda/src/test'
import { ErrorBoundary as ReactErrorBoundary, FallbackProps } from 'react-error-boundary'

const errorTest = test(/does not exist in container|cannot find module|Loading chunk/i)

function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  const hasFileNotFound = errorTest(error.message)
  return (
    <div className="h-screen p-10 text-center flex flex-col justify-center gap-4">
      <div className="flex justify-center pb-6">
        <img
          width={160}
          alt=""
          src="https://p.ampmake.com/fed/image/png/221b60874a0b8f0e12c910b53b39b696.png"
        />
      </div>
      <div className="text-2xl text-slate-900">
        {hasFileNotFound ? '发现新的版本' : '出错啦！'}
      </div>
      <div className="text-sm text-slate-600">
        {hasFileNotFound
          ? '当前应用已更新，请及时更新应用，避免出现页面异常情况~'
          : '当前页面有问题，请点击重试或刷新页面，若仍无法正常展示请点击【详情】并截图，拉工单联系平台值班人定位解决！'}
      </div>
      <div>
        {hasFileNotFound ? (
          <button onClick={() => window.location.reload()}>更新应用</button>
        ) : (
          <button
            className="rounded-md bg-teal-700 hover:bg-teal-600 text-md text-white px-5 py-1"
            onClick={resetErrorBoundary}
          >
            重试
          </button>
        )}
      </div>
      <details className="text-sm text-slate-500 text-center whitespace-pre-wrap">
        {error.message}
      </details>
    </div>
  )
}

function ErrorBoundary({ children }: { children: ReactNode }) {
  return <ReactErrorBoundary FallbackComponent={Fallback}>{children}</ReactErrorBoundary>
}

export default ErrorBoundary
