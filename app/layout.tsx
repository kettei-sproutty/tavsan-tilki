import React from 'react'
import { cookies } from 'next/headers'
import { Header, Footer } from '../components/layout'

import type { FC, PropsWithChildren } from 'react'

import './globals.css'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  const themeCookie = cookies().get('theme')
  const langCookie = cookies().get('lang')

  return (
    <html
      lang={langCookie?.value || 'en'}
      data-theme={themeCookie?.value || 'tavsan'}
    >
      <body className='w-full h-screen'>
        <Header />
        <main className='p-2'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
