import React from 'react'
import { cookies } from 'next/headers'
import { Footer, Header } from '../components/layout'
import type { FC, PropsWithChildren } from 'react'

import './globals.css'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  const theme = cookies().get('theme')

  return (
    <html
      lang='en'
      data-theme={theme?.value || 'tavsan'}
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
