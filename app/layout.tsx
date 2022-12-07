import React from 'react'
import { Footer, Header } from '../components/layout'

import type { FC, PropsWithChildren } from 'react'

import './globals.css'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html
      lang='en'
      data-theme='dark-theme'
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
