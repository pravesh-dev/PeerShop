import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import CartTab from './CartTab'

function Layout() {
  return (
    <div>
      <main>
        <Header />
        <Outlet />
      </main>
      <CartTab/>
    </div>
  )
}

export default Layout
