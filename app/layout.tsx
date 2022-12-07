import React from 'react'
import type { FC, PropsWithChildren } from 'react'

import './globals.css'

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html
      lang='en'
      data-theme='dark-theme'
    >
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
