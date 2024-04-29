import { Outlet } from 'react-router-dom'
function Columns() {
  return (
    <div className="flex flex-col h-screen">
      <header className="h-12 bg-black text-white p-2.5">Header Content</header>
      <div className="flex flex-1">
        <aside className="w-48 bg-gray-100 p-4 flex-none" style={{ width: '200px' }}>
          Menu Content
        </aside>

        <main className="flex-1 bg-gray-200 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Columns
